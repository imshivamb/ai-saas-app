"use client";

import * as z from "zod";
import { useState } from "react";
import axios from "axios";
import { SendHorizontal, VideoIcon } from "lucide-react";

import { Heading } from "@/components/Heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/use-pro-model";
import toast from "react-hot-toast";

const VideoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", values);

      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video Generator"
        description="Create stunning videos from ideas with our Video Generator."
        icon={VideoIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 
            md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0
                        focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Journey through Space and Time"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                size="sm"
                variant="ghost"
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                <SendHorizontal />
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!video && !isLoading && (
            <div>
              <Empty label="No Video generated" />
            </div>
          )}
          {video && (
            <video
              className="w-full aspect-video mt-8 rounded-lg 
            border bg-black"
              controls
              src={video}
            ></video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
