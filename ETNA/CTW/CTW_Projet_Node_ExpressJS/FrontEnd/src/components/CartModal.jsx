const CartModal = () => {

    const carItems = true


    return ( 
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">CartModal
        {!carItems ? (
            <div className="">Le panier est vide</div>
        ) : (
            <div className="">
                <img src="{}" alt="" width={72} height={96} className="object-cover rounded-md"/>
            </div>
        )}
    </div>
    )
}

export default CartModal