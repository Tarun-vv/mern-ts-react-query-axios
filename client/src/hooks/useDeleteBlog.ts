import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlog as deleteBlogApi } from "../requests/data-service";

export function useDeleteBlog() {
  const queryClient = useQueryClient();

  const { mutate: deleteBlog, isLoading: isDeleting } = useMutation({
    mutationFn: (id: string) => deleteBlogApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
  });

  return { deleteBlog, isDeleting };
}
