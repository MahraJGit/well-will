import { Button } from "@/components/common/Button";

export default function NotFound() {
  return (
    <section className="bg-cream px-5 pb-24 pt-40 text-center">
      <h1 className="font-display text-[48px] tracking-[-0.03em]">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-muted">
        That address does not exist. The well is still this way.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back home</Button>
      </div>
    </section>
  );
}
