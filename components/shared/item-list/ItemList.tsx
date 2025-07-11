import React from 'react';
import { Card } from '../../ui/card';

type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

const ItemList = ({ children, title, action }: Props) => {
  return <Card className="size-full lg:flex-none lg:w-80 p-2"></Card>;
};

export default ItemList;
