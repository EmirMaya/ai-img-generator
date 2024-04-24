import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { log } from "console";
import Image from "next/image";

export default function Home() {
  const createPrediction = async (formData: FormData) => {
    "use server";
    console.log(formData);
  };

  return (
    <form action={createPrediction}>
      <Input name="image" type="text" />
      <Textarea name="prompt" />
      <button>Create!</button>
    </form>
  );
}
