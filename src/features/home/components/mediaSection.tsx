import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MediaTabContent } from "@/features/home/components/mediaTabContent";
// Types
import type { MediaSection } from "@/features/types";

export async function MediaSection({ section }: { section: MediaSection }) {
  return (
    <Tabs
      defaultValue="today"
      className="container flex h-104 flex-col gap-y-5 pt-8"
    >
      <div className="flex items-center gap-x-5">
        <h2 className="text-2xl font-bold">{section.title}</h2>
        <TabsList className="h-8 rounded-full border border-black p-0">
          {section.tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="group data-[state=active]:bg-primary h-full rounded-full px-5 py-0 text-black data-[state=active]:text-transparent"
            >
              <span className="from-[#c0fecf] to-[#1ed5a9] bg-clip-text group-data-[state=active]:bg-gradient-to-r group-data-[state=active]:font-bold">
                {tab.title}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {section.tabs.map((tab, index) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="grid h-full grid-flow-col grid-cols-[repeat(auto-fill,150px)] gap-x-5 overflow-x-auto"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <MediaTabContent key={index} dataFunction={tab.dataFunction} />
          </Suspense>
        </TabsContent>
      ))}
    </Tabs>
  );
}
