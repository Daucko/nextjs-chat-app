import React from 'react';
import { Card } from '../../ui/card';

type Props = {};

const ConversationFallback = (props: Props) => {
  return (
    <Card className="hidden lg:flex size-full p-2 items-center justify-center bg-secondary text-secondary-foreground">
      Select/start a conversation to get started!
    </Card>
  );
};

export default ConversationFallback;
