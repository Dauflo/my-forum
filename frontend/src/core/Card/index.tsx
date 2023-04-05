import cx from 'classnames'
import { Stack } from '../Stack'

type Props = JSX.IntrinsicElements['div']

export function Card({ children, className, ...rest }: Props) {
    return (
        <div className={cx('border rounded-lg border-gray-200 bg-white px-4 py-5 sm:px-6', className)} {...rest}>
            <Stack>{children}</Stack>
        </div>
    )
}
