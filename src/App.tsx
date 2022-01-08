import React from 'react';
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data:any) => console.log(data);
  return (
  <div dir="rtl" className="max-w-2xl border-2 mx-auto">
    <h1 className="text-xl font-sans">فرم </h1> 
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} >
      <input {...register("firstName")} />
      <select {...register("gender")}>
         <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="sumbit" />
    </form>
  </div>
  );
}

export default App;
