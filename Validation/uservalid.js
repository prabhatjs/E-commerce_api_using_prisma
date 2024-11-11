import zod from 'zod'

export const signupvalidation=zod.object({
    name:zod.string(),
    email:zod.string().email(),
    password:zod.string().min(6)
})

export const AddressValidation=zod.object({
    lineone:  zod.string(),   
    linetwo : zod.string().nullable()   ,
    city    : zod.string() ,
    county  : zod.string(),
    pincode : zod.string().length(6),
})

export const UpdateUserAddresSchema=zod.object({
    name:zod.string().optional(),
    defaultshippingaddress: zod.number().optional(),
    defaultbillingaddress : zod.number().optional()
})