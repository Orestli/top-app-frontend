import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import React, {
  useEffect,
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
  forwardRef,
  ForwardedRef,
  useRef,
} from 'react';
import { FieldError } from 'react-hook-form';

interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  setRating?: (rating: number) => void;
  error?: FieldError;
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    { isEditable = false, rating, setRating, error, tabIndex, ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [ratingArray, setRatingArray] = useState<React.ReactElement[]>(
      new Array(5).fill(<></>)
    );
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
      constructRating(rating);
    }, [rating, tabIndex]);

    const computeFocus = (r: number, i: number) => {
      if (!isEditable) {
        return -1;
      }

      if ((!rating && i === 0) || rating === i + 1) {
        return tabIndex ?? 0;
      }

      return -1;
    };

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map(
        (r: React.ReactElement, i: number) => (
          <span
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
            tabIndex={computeFocus(rating, i)}
            onKeyDown={handleKey}
            ref={(r) => ratingArrayRef.current?.push(r)}
            role={isEditable ? 'slider' : ''}
            aria-valuenow={rating}
            aria-valuemin={1}
            aria-valuemax={5}
            aria-label={isEditable ? 'Укажите рейтинг' : `рейтинг ${rating}`}
            aria-invalid={!!error}
          >
            <StarIcon />
          </span>
        )
      );

      setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }

      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }

      setRating(i);
    };

    const handleKey = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (!isEditable || !setRating) {
        return;
      }

      if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
        if (!rating) {
          setRating(1);
        } else {
          e.preventDefault();
          setRating(rating < 5 ? rating + 1 : 5);
        }

        ratingArrayRef.current[rating]?.focus();
      }

      if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
        e.preventDefault();
        setRating(rating > 1 ? rating - 1 : 1);
        ratingArrayRef.current[rating - 2]?.focus();
      }
    };

    return (
      <div
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      >
        {ratingArray.map((r: React.ReactElement, i: number) => (
          <span key={i}>{r}</span>
        ))}
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
