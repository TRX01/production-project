import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'enteties/Counter/model/slice/counterSlice';
import { getCounterValue } from 'enteties/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1
                data-testid="title-value"
            >
                {counterValue}
            </h1>

            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    )
}
