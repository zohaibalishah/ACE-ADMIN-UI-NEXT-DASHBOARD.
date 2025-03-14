'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { MImage, PrimaryButton, Typography } from '../common';
import { mImage } from '../../../../public/images';
import { icons } from '../../../../public/icons/index';
import { PasswordField, TextField } from '../form';
import { FiEye } from 'react-icons/fi';
import Link from 'next/link';
import { routes } from '@/app/utils/const';

export const LoginPage = (): React.ReactElement => {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState<{ email: string; password: string }>({
    email: 'admin@gmail.com',
    password: 'club',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!payload.email) {
      toast.error('Email is required');
      return;
    }

    if (!payload.password) {
      toast.error('Password is required');
      return;
    }

    setLoading(true);
    try {
      const res = await signIn('credentials', {
        email: payload.email,
        password: payload.password,
        redirect: true, // Allow redirection after login
        callbackUrl: '/admin/dashboard', // Target redirect URL
      });
      if (res?.ok == false) {
        toast.error(res.error);
        return;
      } else if (res?.ok) {
        setPayload({ email: '', password: '' });
        toast.success('Login successful');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-bgDark pb-10 sm:pb-0 h-screen overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 relative h-full">
          <div className="w-full md:h-screen  sticky top-0 hidden md:block ">
            <MImage
              src={mImage.loginBg}
              w={720}
              h={768}
              alt="login"
              className="w-full object-cover object-bottom h-full sticky top-0 "
            />
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full h-full flex flex-col justify-center items-center  py-7  bg-bgBox text-SecondaryColor "
          >
            <div className=" flex flex-col justify-center items-center gap-y-5">
              <MImage
                src={icons.ACELogo}
                w={136}
                h={57}
                alt="logo"
                className="object-scale-down shrink-0 pt-2"
              />
              <div className="text-center py-1">
                <Typography variant="h4" className="py-1">
                  Welcome Back, login
                </Typography>
                <Typography>
                  Login to admin dashboard to see and mange app
                </Typography>
                and court owner
              </div>

              <div className="flex flex-col gap-y-2 w-full">
                <TextField
                  placeholder="Email"
                  className="!w-full lg:!w-[457px]"
                  required
                  name="email"
                  value={payload.email}
                  onChange={handleChange}
                />
                <div>
                  <PasswordField
                    placeholder="Password"
                    name="password"
                    required
                    value={payload.password}
                    onChange={handleChange}
                  />
                  <Link href={routes.changepassword}>
                    <Typography className="pt-1">Forget Password?</Typography>
                  </Link>
                </div>
              </div>
              <div className="py-2 xl:py-4 w-full">
                <PrimaryButton
                  type={'submit'}
                  title={loading ? 'Signing In...' : 'Sign In'}
                  disabled={loading}
                  className="!w-full md:!w-[27s0px] lg:!w-[457px] mt-1 sm:mt-3"
                />
              </div>
              <div>
                <Typography variant="bodyMedium">
                  Need help? Contact us at{' '}
                  <span className="text-PrimaryColor text-center">
                    contact@aceofficial.com
                  </span>
                </Typography>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
