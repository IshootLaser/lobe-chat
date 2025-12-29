import { BuiltinRenderProps } from '@lobechat/types';
import { PreviewGroup } from '@lobehub/ui';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DallEImageItem } from '@/types/tool/dalle';

import GalleyGrid from './GalleyGrid';
import ImageItem from './Item';

const DallE = memo<BuiltinRenderProps<DallEImageItem[]>>(({ content, messageId }) => {
  return (
    <Flexbox gap={16}>
      <PreviewGroup>
        <GalleyGrid items={content.map((c) => ({ ...c, messageId }))} renderItem={ImageItem} />
      </PreviewGroup>
    </Flexbox>
  );
});

export default DallE;
