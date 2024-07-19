
import RegisterForm from '@/components/forms/RegisterForm';
import { users } from '@/lib/appwrite.config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function register({params:{userId}}:SearchParamProps) {
    const user = await users.get(userId);

  return (
    <div className="flex h-screen max-h-screen ">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
        

        <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/image1.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
        
      />
    </div>
  );
}


