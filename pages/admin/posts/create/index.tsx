import { NextPage } from 'next';
import Editor from '../../../../components/admin/editor/Editor';

interface Props {}

const CreatePost: NextPage<Props> = ({}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Editor />
    </div>
  );
};

export default CreatePost;
