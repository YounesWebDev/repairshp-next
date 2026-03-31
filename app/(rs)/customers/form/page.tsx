import { BackButton } from "@/components/BackButton"
import { getCustomer } from "@/lib/queries/getCustomer"
import CustomerFrom from "./CustomerForm"
export default async function CustomerFormPage({
    searchParams,
} : {
    searchParams: Promise<{ [key: string] : string | undefined }>
}){
    const { customerId } = await searchParams

    // Edit customer form 
    if (customerId) {
        const customer = await getCustomer(parseInt(customerId))
        
        if(!customer) {
            return (
                <>
                    <h2 className="text-2xl mb-2">Customer Id #{customerId} not found</h2>
                    <BackButton title="Go Back"
                                variant="default"/>
                </>
            )
        }
        console.log(customer)
        return <CustomerFrom customer={customer} />
        // put customer form component
    } else {
        // new customer form component
        return <CustomerFrom />

    }

    return null
}
