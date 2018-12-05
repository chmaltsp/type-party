import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
  StateChangeTypes,
} from 'downshift';
import * as React from 'react';
import { equalByString } from '.';

interface MultiDownshiftProps<Item> {
  render?: () => void;
  children?: any;
  onStateChange?: (options: any, stateAndHelpers: any) => void;
  onChange: (selectedItems: Item[]) => void;
  onSelect?: (selectedItems: Item[]) => void;
  itemToString: (item: any) => string;
  selectedItem: Item[];
}

export interface RemoveButtonProps<Item> {
  onClick: (e: React.SyntheticEvent) => void;
  item: Item;
}

class MultiDownshift<ListItem> extends React.Component<MultiDownshiftProps<ListItem>> {
  public stateReducer = (
    state: DownshiftState<ListItem>,
    changes: StateChangeOptions<ListItem>
  ) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          inputValue: '',
          isOpen: true,
        };
      default:
        return changes;
    }
  }

  public handleSelection = (selectedItem: ListItem) => {
    if (
      this.props.selectedItem.find(item =>
        equalByString(item, selectedItem, this.props.itemToString)
      )
    ) {
      this.removeItem(selectedItem);
    } else {
      this.addSelectedItem(selectedItem);
    }
  }

  public removeItem = (item: ListItem) => {
    const filteredItems = this.props.selectedItem.filter(
      i => !equalByString(i, item, this.props.itemToString)
    );

    this.props.onChange(filteredItems);
  }
  public addSelectedItem(item: ListItem) {
    this.props.onChange([...this.props.selectedItem, item]);
  }

  public getRemoveButtonProps = ({
    onClick,
    item,
    ...props
  }: RemoveButtonProps<ListItem>) => {
    return {
      onClick: (e: any) => {
        // TODO: use something like downshift's composeEventHandlers utility instead
        // tslint:disable-next-line:no-unused-expression
        onClick && onClick(e);
        e.stopPropagation();
        this.removeItem(item);
      },
      ...props,
    };
  }

  public getStateAndHelpers(downshift: ControllerStateAndHelpers<ListItem>): any {
    return {
      getRemoveButtonProps: this.getRemoveButtonProps,
      removeItem: this.removeItem,
      ...downshift,
    };
  }
  public render() {
    // const { render, children = render, ...props } = this.props;
    // TODO: compose together props (rather than overwriting them) like downshift does
    return (
      <Downshift
        {...this.props}
        stateReducer={this.stateReducer}
        onChange={this.handleSelection}
        selectedItem={this.props.selectedItem}
      >
        {(downshift: ControllerStateAndHelpers<ListItem>) =>
          // @ts-ignore
          this.props.children(this.getStateAndHelpers(downshift))
        }
      </Downshift>
    );
  }
}

export default MultiDownshift;
