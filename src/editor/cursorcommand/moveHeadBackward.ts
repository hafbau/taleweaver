import TaleWeaver from '../TaleWeaver';
import CursorCommand from './CursorCommand';
import CursorTransformation from '../cursortransformer/CursorTransformation';
import TranslateCursorHead from '../cursortransformer/steps/TranslateCursorHead';

export default function moveHeadBackward(): CursorCommand {
  return (taleWeaver: TaleWeaver): CursorTransformation => {
    const transformation = new CursorTransformation();
    const editorCursor = taleWeaver.getEditorCursor();
    if (!editorCursor) {
      return transformation;
    }
    if (editorCursor.getHead() < 1) {
      return transformation;
    }
    transformation.addStep(new TranslateCursorHead(-1));
    return transformation;
  };
}