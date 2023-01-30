import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const LierrePrice = 10
    const flowerPrice = 15
    return (
        <div className="lmj-cart ">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <li>Lierre : {LierrePrice}€</li>
                <li>Fleurs : {flowerPrice}€</li>
            </ul>
            Total : {monsteraPrice + LierrePrice + flowerPrice}€
        </div>
    )
}

export default Cart