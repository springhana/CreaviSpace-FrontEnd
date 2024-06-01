import { IoBookmark } from '@react-icons/all-files/io5/IoBookmark';
import { IoBookmarkOutline } from '@react-icons/all-files/io5/IoBookmarkOutline';

import {
  useGetBookmarkPost,
  useMutateBookmarkPost,
} from '@/hooks/queries/useBookmark';

interface IBookmarkButtonProps {
  color?: string;
  size?: number;
  className?: string;
  id: number;
  postType: string;
}

export default function BookmarkButton({
  color = '#0099DB',
  size = 25,
  className,
  id,
  postType,
}: IBookmarkButtonProps) {
  const { data, isLoading } = useGetBookmarkPost(id, postType);
  const { mutate } = useMutateBookmarkPost(id, postType);

  const handleToggleBookmark = () => {
    mutate();
  };

  return (
    <button type="button" onClick={handleToggleBookmark} className={className}>
      {!isLoading && data?.bookmarkStatus ? (
        <IoBookmark color={color} size={size} aria-label="활성화된 북마크" />
      ) : (
        <IoBookmarkOutline
          color={color}
          size={size}
          aria-label="비활성화된 북마크"
        />
      )}
    </button>
  );
}
