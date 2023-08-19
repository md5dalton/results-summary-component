export default ({ children, items, itemHandler, empty, itemHandlerProps, ...props }) => (
    <ul {...props} role="list">
        {
            !items.length ? empty :
            items.map((item, index) => (
                <li key={index} {...itemHandlerProps}>{itemHandler(item)}</li>
            ))
        }
        {children}
    </ul>
)
