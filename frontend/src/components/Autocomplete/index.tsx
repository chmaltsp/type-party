import * as React from 'react';
import styled from 'sc';

import { ControllerStateAndHelpers, GetItemPropsOptions } from 'downshift';

import { InputBase, InputWrapper as AutoCompleteWrapper, Label } from '../Input';

import Flex from '../Flex';
import Tag from '../Tag';
import MultiDownshift, { RemoveButtonProps } from './MultiDownshift';
import { ListItem, ListItemProps, ListWrapper, TagSpacer } from './styles';

const Input = styled.input`
  flex: 1;
  border: none;
  &:focus {
    outline: none;
  }
`;

const InputWrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.colors.greyCCC};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export interface AutocompleteProps<T = {}> {
  label?: string;
  placeholder?: string;
  items?: T[];
  itemToString: (item: T) => string;
  handleOnChange: (selection: T[]) => void;
}

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];

interface MultiDownshiftProps {
  removeItem: any;
  getRemoveButtonProps: (item: any) => RemoveButtonProps;
  selectedItems: any;
}
export default class Autocomplete<T> extends React.Component<AutocompleteProps<T>> {
  constructor(props: AutocompleteProps<T>) {
    super(props);

    this.state = {};
  }

  private handleOnchange = (selection: any) => {
    console.log('You selected', selection);
    this.props.handleOnChange(selection);
  }

  private handleOnInputEnter = (event: React.KeyboardEvent) => {
    // Callback on Enter only to add to list etc...
    if (event.which === 13) {
      console.log('ON ENTER', event.which);
      event.preventDefault();
    }
  }

  public render() {
    return (
      <MultiDownshift
        onChange={this.handleOnchange}
        itemToString={this.props.itemToString}
      >
        {({
          getRootProps,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getRemoveButtonProps,
          removeItem,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItems,
        }: ControllerStateAndHelpers<ListItemProps> & MultiDownshiftProps) => (
          <AutoCompleteWrapper
            {...getRootProps({
              refKey: 'innerRef',
            })}
          >
            <Label {...getLabelProps()}>Enter a fruit</Label>
            <InputWrapper>
              {selectedItems.map((selectedItem: ListItemProps, index: number) => (
                <TagSpacer key={index}>
                  <Tag
                    name={selectedItem.value}
                    removeButtonProps={getRemoveButtonProps({ item: selectedItem })}
                  />
                </TagSpacer>
              ))}
              <Input
                {...getInputProps({
                  onKeyDown: this.handleOnInputEnter,
                  onKeyUp: event => {
                    if (event.key === 'Backspace' && !inputValue) {
                      removeItem(selectedItems[selectedItems.length - 1]);
                    }
                  },
                })}
              />
            </InputWrapper>
            <ListWrapper {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(item => !inputValue || item.value.includes(inputValue))
                    .map((item, index) => (
                      <ListItem
                        {...getItemProps({
                          index,
                          isActive: index === highlightedIndex,
                          isSelected: selectedItems.includes(item),
                          item,
                          key: item.value,
                        } as any)}
                      >
                        {item.value}
                      </ListItem>
                    ))
                : null}
            </ListWrapper>
          </AutoCompleteWrapper>
        )}
      </MultiDownshift>
    );
  }
}
