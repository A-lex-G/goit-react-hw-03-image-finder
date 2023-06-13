
export const Button = ({ onClick }) => {
    return (
        <button type="submit" onClick={onClick}>
            <span>Load more</span>
        </button>
    )
}


{/* <button type="submit" onClick={() => (myApiFetch.fetchImages())}>
    <span>Load more</span>
</button> */}