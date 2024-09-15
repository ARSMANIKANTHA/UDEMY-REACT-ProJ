import classNames from 'classnames';
function Button({
    children,
    primary,
    success,
    ...rest
})
{
    console.log(rest)
    const cn = classNames ('text-white p-2 mt-2 items-center flex rounded-full min-w-40 h-10 justify-center',{
        "bg-blue-600":primary,
        "bg-yellow-600":success,
    })
    
    return <button {...rest} className={cn}>{children}</button>
}

export default Button;