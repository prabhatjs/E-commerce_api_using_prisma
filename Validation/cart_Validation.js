import zod from 'zod'

export const CartSchema=zod.object({
    productId:zod.number(),
    quantity:zod.number()
})