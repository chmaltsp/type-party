import * as React from 'react';
import styled from 'sc';

import {
  ControllerStateAndHelpers,
  GetItemPropsOptions,
  StateChangeOptions,
  StateChangeTypes,
} from 'downshift';

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

export interface AutocompleteProps<Item> {
  label?: string;
  placeholder?: string;
  items: Item[];
  itemToString: (item: Item) => string;
  handleOnChange: (selection: Item[]) => void;
  handleSearch?: (search: string | null) => void;
  value: Item[];
}

interface RemoveButtonInput<Item> {
  item: Item;
  onClick?: () => void;
}
interface MultiDownshiftProps<Item> {
  removeItem: any;
  getRemoveButtonProps: (input: RemoveButtonInput<Item>) => RemoveButtonProps<Item>;
  selectedItems: any;
}

type EqualByStringUtil = <T = {}>(
  itemA: T,
  itemB: T,
  itemToString: (item: T) => string
) => boolean;
export const equalByString: EqualByStringUtil = (itemA, itemB, itemToString) =>
  itemToString(itemA) === itemToString(itemB);
export default class Autocomplete<Item> extends React.Component<AutocompleteProps<Item>> {
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
        selectedItem={this.props.value || []}
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
          selectedItem,
        }: ControllerStateAndHelpers<Item[]> & MultiDownshiftProps<Item>) => (
          <AutoCompleteWrapper
            {...getRootProps({
              refKey: 'innerRef',
            })}
          >
            <Label {...getLabelProps()}>{this.props.label}</Label>
            <InputWrapper>
              {selectedItem &&
                selectedItem.map((item: Item, index: number) => (
                  <TagSpacer key={index}>
                    <Tag
                      name={this.props.itemToString(item)}
                      removeButtonProps={getRemoveButtonProps({ item })}
                      // removeButtonProps={getRemoveButtonProps({ item })}
                    />
                  </TagSpacer>
                ))}
              <Input
                {...getInputProps({
                  onKeyDown: this.handleOnInputEnter,
                  onKeyUp: event => {
                    const currentSelection = selectedItem || [];
                    if (event.key === 'Backspace' && !inputValue) {
                      removeItem(currentSelection[currentSelection.length - 1]);
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
                        this.props
                          .itemToString(item)
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <ListItem
                        {...getItemProps({
                          index,
                          isActive: index === highlightedIndex,
                          isSelected:
                            selectedItem &&
                            selectedItem.find((otherItem: any) =>
                              equalByString<Item>(
                                otherItem,
                                item,
                                this.props.itemToString
                              )
                            ),
                          item,
                          key: index + this.props.itemToString(item),
                        } as any)}
                      >
                        {this.props.itemToString(item)}
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
