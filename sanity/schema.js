import { post } from "./schemas/post";
import { timeline } from "./schemas/timeline";
import { work } from "./schemas/work";

export const schema = {
  types: [work, timeline, post],
};
