'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent,CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useChat } from 'ai/react'

export function Chat(){

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return(
    <Card className='w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>

        <CardContent className='space-y-4'>

          {messages.map(message => {
            return(
              <div key={message.id} className='flex gap-3 text-slate-600 text-sm'>
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>HM</AvatarFallback>
                  <AvatarImage src="https://icons.iconarchive.com/icons/iconarchive/dog-breed/512/Siberian-Husky-icon.png"/>
                </Avatar>
              )}

              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://cdn-icons-png.flaticon.com/512/1624/1624640.png"/>
                </Avatar>
              )}
              <p className='leading-relaxed'>
                <span className='block font-bold text-slate-700'>
                  {message.role === 'user' ? 'User' : 'AI'}:
                </span>
               {message.content}</p>
            </div>
            )
          })}
        </CardContent>
        <CardFooter>
          <form className='w-full flex gap-2' onSubmit={handleSubmit}>
            <Input placeholder='How can I help you?' value={input} onChange={handleInputChange}/>
            <Button type='submit'>Send</Button>
          </form>
        </CardFooter>
      </Card>
  )
}