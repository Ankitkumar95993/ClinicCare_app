"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {Form} from '@/components/ui/form';

import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { formSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.action";


const RegisterForm = ({user}:{user:User}) => {
  // 1. Define your form.
  const router = useRouter();

  const [isLoading,setIsLoading] = useState(false);

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async({name,email,phone}: z.infer<typeof formSchema>) => {

    setIsLoading(true);

    try{
      const userData = {name,email,phone};
      const user = await createUser(userData);
      if(user) router.push(`/patients/${user.$id}/register`)
    
    }catch(error){
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
        <section className="mb-12 space-y-4">
         <h1 className="header">Welcome 👋</h1>
         <p className = "text-dark-700" >Let us know more about your self.</p>
        </section>

        <section className="mb-12 space-y-6">
         <div className="mb-9 space-y-1"></div>
         <h2 className="sub-header">Personal Information</h2>
        </section>

        <CustomFormField
         fieldType = {FormFieldType.INPUT}
         control={form.control}
         name = "name"
         label ="Full name"
         placeholder = "John Doe"
         iconSrc = "/assets/icons/user.svg"
         iconAlt="user"
         />

         <div className="flex flex-col gap-6 xl:flex-row">
         <CustomFormField
         fieldType = {FormFieldType.INPUT}
         control={form.control}
         name = "email"
         label ="email"
         placeholder = "abc@gmail.com"
         iconSrc = "/assets/icons/email.svg"
         iconAlt="email"
         />

       <CustomFormField
         fieldType = {FormFieldType.PHONE_INPUT}
         control={form.control}
         name = "phone"
         label ="phone number"
         placeholder = "(555) 123-4567"
         
         />

         </div>

    
        <SubmitButton isLoading={isLoading}> Get Started </SubmitButton>
        
      </form>
    </Form>
  )
}

export default RegisterForm;