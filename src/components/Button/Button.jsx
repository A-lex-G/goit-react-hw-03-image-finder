import PropTypes from 'prop-types';
import { LoadMore } from './Button.styled';

export const Button = ({ onClick }) => {

    return (
        <LoadMore type="submit" onClick={onClick}>
            <span>Load more</span>
        </LoadMore>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}