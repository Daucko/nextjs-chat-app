import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'

type Props = {};

const addFriendFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field can't be empty" })
    .email('Please enter a valid email'),
});

const AddFriendDialog = (props: Props) => {

  const form = useForm<z.infer<typeof addFriendFormSchema>>({
    resolver: zodResolver(addFriendFormSchema)
  }) 

  return <div>AddFriendDialog</div>;
};

export default AddFriendDialog;
