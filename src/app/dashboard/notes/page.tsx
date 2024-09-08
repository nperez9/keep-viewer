import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CreateNote() {
  return (
    <div>
      <h1>Create Note</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <Input type="text" id="title" placeholder="Title" />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="sr-only">
            Content
          </label>
          <Input type="text" id="content" placeholder="Content" />
        </div>
        <div className="grid">
          <Button>Create</Button>
        </div>
      </form>
    </div>
  );
}
