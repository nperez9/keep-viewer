import LoginButton from '@/components/LoginButton';

export default function Home() {
  return (
    <main>
      <h1>Keep Viewer</h1>
      <p>Quick visualizer of your keep notes</p>
      <section>
        <h4 className="text-2xl">LOGIN</h4>
        <LoginButton />
      </section>
    </main>
  );
}
