import { useMutation } from "@tanstack/react-query";
import { Blog } from "../types/blog";
import { updateBlog as updateBlogApi } from "../requests/data-service";

export function useUpdateBlog() {
  const { mutate: updateBlog, isLoading: isUpdating } = useMutation({
    mutationFn: (updatedBlog: Blog) => updateBlogApi(updatedBlog),
  });

  return { updateBlog, isUpdating };
}
