'use client';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

//components
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props {}

const Index: FC<Props> = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
  const { push } = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="mx-auto max-w-[70vw] md:max-w-[90vw] px-[4vw] ">
      <div className="relative flex items-center justify-center mb-[4vw] md:mb-[6vw]">
        <button
          className="group absolute left-0 p-[0.8vw] transition-all duration-300 hover:translate-x-[-0.5vw]"
          onClick={() => push('/')}
          title="Back to Home"
        >
          <svg
            focusable="false"
            className="h-[2vw] w-[2vw] md:h-[5vw] md:w-[5vw] fill-primary/40 group-hover:fill-primary transition-colors"
            viewBox="0 0 24 24"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
          </svg>
        </button>
        <h1 className="text-[4vw] md:text-[8vw] font-outfit font-black tracking-tighter text-text-1">
          PROJECT REQUEST
        </h1>
      </div>
      <form className="flex h-full flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-wrap w-full">
          {RADIO_FIELDS.map((item) => (
            <RadioGroup
              onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
              key={item.title}
              className={`mb-[3vw] inline-block w-[calc(50%-1.75vw)] md:w-full ${item.classes}`}
              required={true}
            >
              <h4 className="mb-[1.2vw] md:mb-[2vw] text-[1.4vw] md:text-[3.5vw] font-outfit font-bold text-text-1/80 uppercase tracking-widest">{item.title}</h4>
              <div className="flex flex-col gap-[0.8vw] md:gap-[2vw]">
                {item.radioArray.map((radio) => (
                  <div key={radio.value} className="flex items-center space-x-[1vw] group cursor-pointer">
                    <RadioGroupItem value={radio.value} id={radio.name} required={true} className="border-primary/30 text-primary focus:ring-primary" />
                    <label htmlFor={radio.name} className="text-[1.1vw] md:text-[3vw] font-inter font-light text-text-1/60 group-hover:text-primary transition-colors cursor-pointer">
                      {radio.name}
                    </label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          ))}

          <div className="w-full space-y-[2.5vw] mt-[2vw]">
            {INPUT_FIELDS.map((item) => (
              <div key={item.label} className={`w-full ${item.classes}`}>
                <label htmlFor={item.label} className="font-outfit font-medium uppercase tracking-[0.2em] mb-[0.8vw] text-[1vw] md:text-[2.5vw] text-text-1/40 block">
                  {item.label}
                </label>
                <input
                  onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                  type={item.type || 'text'}
                  name={item.name}
                  id={item.label}
                  placeholder={item.label}
                  className="h-[3.5vw] md:h-[10vw] w-full appearance-none rounded-none border-b border-stroke/30 bg-transparent px-0 py-[0.8vw] text-[1.2vw] md:text-[3vw] font-inter focus:border-primary focus:outline-none transition-colors placeholder:text-text-1/10"
                  required={item.required}
                />
              </div>
            ))}
            <div className="w-full">
              <label className="font-outfit font-medium uppercase tracking-[0.2em] mb-[0.8vw] text-[1vw] md:text-[2.5vw] text-text-1/40 block" htmlFor="message">
                Project Vision & Details
              </label>
              <textarea
                minLength={20}
                maxLength={500}
                onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                id="message"
                name="message"
                placeholder="Briefly describe your objectives..."
                className="min-h-[12vw] md:min-h-[25vw] w-full resize-none border-b border-stroke/30 bg-transparent px-0 py-[1vw] text-[1.2vw] md:text-[3vw] font-inter focus:border-primary focus:outline-none transition-colors placeholder:text-text-1/10"
              />
            </div>
          </div>

          <div className="w-full flex justify-center mt-[4vw] pb-[6vw]">
            <Button
              title="TRANSMIT REQUEST"
              type="submit"
              classes="py-[1.2vw] px-[6vw] md:py-[3vw] md:px-[12vw] text-[1.2vw] md:text-[3vw] font-outfit font-black tracking-[0.3em] bg-primary text-bg-1 hover:bg-white transition-all duration-500 rounded-full shadow-2xl"
              btnClasses=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Index;
