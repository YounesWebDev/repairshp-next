import { createInsertSchema , createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.min(1, "First name is required"),
    lastName: (schema) => schema.min(1, "Last name is required"),
    address1: (schema) => schema.min(1, "Address is required"),
    city: (schema) => schema.min(1, "City is required"),
    state: (schema) => schema.length(2, "State must be exactly 2 characters"),
    email: (schema) => schema.email("Invalid email address"),
    zip: (schema) => schema.regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
    phone: (schema) => schema.regex(/^\d{10}$/, "Phone number must be 10 digits"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type InsertCustomerSchemaType = z.infer<typeof insertCustomerSchema>

export type SelectCustomerSchemaType = z.infer<typeof selectCustomerSchema>
