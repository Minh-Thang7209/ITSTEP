import type ICartItem from "./ICartItem";

export default interface ICart{
    cartItems: ICartItem[], //товар у кошику
    price: number, // ціна замовлення з урухуванням знижок
    delivery?: number, // вартість доставки
    discount?: string, // повідомлення про знижку, як-то "-20%" aбо "-250 грн"
}