
import RegisterForm from '@/components/forms/RegisterForm';
import { users } from '@/lib/appwrite.config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function register({params:{userId}}:SearchParamProps) {
    const user = await users.get(userId);

  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
        

        <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 ClinicCare
          </p>
          <Link href="/?admin=true" className="text-green-500">
            Admin
          </Link>
        </div>
        </div>
      </section>

      <Image
        src="/assets/images/image1.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[40%]"
      />
    </div>
  );
}


