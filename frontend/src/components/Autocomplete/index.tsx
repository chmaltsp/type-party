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

interface ItemDefault {
  value: string;
}

export interface AutocompleteProps<Item> {
  label?: string;
  placeholder?: string;
  items: Item[];
  itemToString: (item: Item) => string;
  handleOnChange: (selection: Item[]) => void;
  handleSearch?: (search: string | null) => void;
}

interface MultiDownshiftProps {
  removeItem: any;
  getRemoveButtonProps: (item: any) => RemoveButtonProps;
  selectedItems: any;
}

export const equalByString = (
  itemA: any,
  itemB: any,
  itemToString: (item: any) => string
) => itemToString(itemA) === itemToString(itemB);
export default class Autocomplete<Item extends ItemDefault> extends React.Component<
  AutocompleteProps<Item>
> {
  constructor(props: AutocompleteProps<Item>) {
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
            <Label {...getLabelProps()}>{this.props.label}</Label>
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
                    if (this.props.handleSearch) {
                      this.props.handleSearch(inputValue);
                    }
                  },
                })}
              />
            </InputWrapper>
            <ListWrapper {...getMenuProps()}>
              {isOpen
                ? this.props.items
                    .filter(
                      item =>
                        !inputValue ||
                        item.value.toLowerCase().includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <ListItem
                        {...getItemProps({
                          index,
                          isActive: index === highlightedIndex,
                          isSelected: selectedItems.find((selectedItem: any) =>
                            equalByString(selectedItem, item, this.props.itemToString)
                          ),
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
