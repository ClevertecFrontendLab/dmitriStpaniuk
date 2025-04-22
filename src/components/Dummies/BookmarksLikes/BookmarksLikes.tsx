import { Flex, Image, Text } from '@chakra-ui/react';

import bookmark from '~/assets/svg/main/new/bookmark.svg';
import like from '~/assets/svg/main/new/like.svg';

interface BookmarksLikesProps {
    bookmarks: number;
    likes: number;
    gap?: string;
}

const BookmarksLikes = ({ bookmarks, likes, gap = '8px' }: BookmarksLikesProps) => (
    <Flex gap={gap} alignItems='flex-end'>
        <Flex key={bookmarks} alignItems='center' gap='6px'>
            <Image src={bookmark} alt='active' />
            <Text fontSize='14px' fontWeight='400' color='customLime.600'>
                {bookmarks}
            </Text>
        </Flex>
        <Flex key={likes} alignItems='center' gap='6px'>
            <Image src={like} alt='active' />
            <Text fontSize='14px' fontWeight='400' color='customLime.600'>
                {likes}
            </Text>
        </Flex>
    </Flex>
);

export default BookmarksLikes;
