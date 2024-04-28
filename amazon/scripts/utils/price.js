export const formatCurrency = (priceCents, quantity=1)=>{
    return (priceCents / 100 * quantity).toFixed(2)
}