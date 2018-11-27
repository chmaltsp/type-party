import Downshift, {
  ControllerStateAndHelpers,
  DownshiftState,
  StateChangeOptions,
} from 'downshift';
import * as React from 'react';
import { equalByString } from '.';
import { ListItemProps } from './styles';

interface MultiDownshiftState {
  selectedItems: string[];
}

interface MultiDownshiftProps {
  render?: () => void;
  children?: any;
  onChange: (
    selectedItems: string[],
    downshift: ControllerStateAndHelpers<ListItemProps>
  ) => void;
  onSelect?: (
    selectedItems: string[],
    downshift: ControllerStateAndHelpers<ListItemProps>
  ) => void;
  itemToString: (item: any) => string;
}

export interface RemoveButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  item: string;
}

class MultiDownshift extends React.Component<MultiDownshiftProps, MultiDownshiftState> {
  public state = { selectedItems: [] };

  public stateReducer = (
    state: DownshiftState<ListItemProps>,
    changes: StateChangeOptions<ListItemProps>
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

  public handleSelection = (
    selectedItem: string,
    downshift: ControllerStateAndHelpers<ListItemProps>
  ) => {
    const callOnChange = () => {
      const { onSelect, onChange } = this.props;
      const { selectedItems } = this.state;
      if (onSelect) {
        onSelect(selectedItems, this.getStateAndHelpers(downshift));
      }
      if (onChange) {
        onChange(selectedItems, this.getStateAndHelpers(downshift));
      }
    };

    // @ts-ignore
    if (
      this.state.selectedItems.find(item =>
        equalByString(item, selectedItem, this.props.itemToString)
      )
    ) {
      this.removeItem(selectedItem, callOnChange);
    } else {
      this.addSelectedItem(selectedItem, callOnChange);
    }
  }

  public removeItem = (item: any, cb?: any) => {
    this.setState(({ selectedItems }) => {
      return {
        selectedItems: selectedItems.filter(
          i => !equalByString(i, item, this.props.itemToString)
        ),
      };
    },            cb);
  }
  public addSelectedItem(item: any, cb: any) {
    this.setState(
      ({ selectedItems }) => ({
        selectedItems: [...selectedItems, item],
      }),
      cb
    );
  }

  public getRemoveButtonProps = ({ onClick, item, ...props }: RemoveButtonProps) => {
    return {
      onClick: (e: any) => {
        console.log(e, item);
        // TODO: use something like downshift's composeEventHandlers utility instead
        // tslint:disable-next-line:no-unused-expression
        onClick && onClick(e);
        e.stopPropagation();
        this.removeItem(item);
      },
      ...props,
    };
  }

  public getStateAndHelpers(downshift: ControllerStateAndHelpers<ListItemProps>): any {
    const { selectedItems } = this.state;
    return {
      getRemoveButtonProps: this.getRemoveButtonProps,
      removeItem: this.removeItem,
      selectedItems,
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
        selectedItem={null}
      >
        {(downshift: ControllerStateAndHelpers<ListItemProps>) =>
          // @ts-ignore
          this.props.children(this.getStateAndHelpers(downshift))
        }
      </Downshift>
    );
  }
}

export default MultiDownshift;
