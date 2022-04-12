import {
    func,
    object,
    optional,
} from 'superstruct';


export const EventTypes = object({
    // Clipboard Events
    onCopy: optional(func()),
    onCopyCapture: optional(func()),
    onCut: optional(func()),
    onCutCapture: optional(func()),
    onPaste: optional(func()),
    onPasteCapture: optional(func()),

    // Composition Events
    onCompositionEnd: optional(func()),
    onCompositionEndCapture: optional(func()),
    onCompositionStart: optional(func()),
    onCompositionStartCapture: optional(func()),
    onCompositionUpdate: optional(func()),
    onCompositionUpdateCapture: optional(func()),

    // Focus Events
    onFocus: optional(func()),
    onFocusCapture: optional(func()),
    onBlur: optional(func()),
    onBlurCapture: optional(func()),

    // Form Events
    onChange: optional(func()),
    onChangeCapture: optional(func()),
    onBeforeInput: optional(func()),
    onBeforeInputCapture: optional(func()),
    onInput: optional(func()),
    onInputCapture: optional(func()),
    onReset: optional(func()),
    onResetCapture: optional(func()),
    onSubmit: optional(func()),
    onSubmitCapture: optional(func()),
    onInvalid: optional(func()),
    onInvalidCapture: optional(func()),

    // Image Events
    onLoad: optional(func()),
    onLoadCapture: optional(func()),
    onError: optional(func()),
    onErrorCapture: optional(func()),

    // Keyboard Events
    onKeyDown: optional(func()),
    onKeyDownCapture: optional(func()),
    onKeyUp: optional(func()),
    onKeyUpCapture: optional(func()),

    // Media Events
    onAbort: optional(func()),
    onAbortCapture: optional(func()),
    onCanPlay: optional(func()),
    onCanPlayCapture: optional(func()),
    onCanPlayThrough: optional(func()),
    onCanPlayThroughCapture: optional(func()),
    onDurationChange: optional(func()),
    onDurationChangeCapture: optional(func()),
    onEmptied: optional(func()),
    onEmptiedCapture: optional(func()),
    onEncrypted: optional(func()),
    onEncryptedCapture: optional(func()),
    onEnded: optional(func()),
    onEndedCapture: optional(func()),
    onLoadedData: optional(func()),
    onLoadedDataCapture: optional(func()),
    onLoadedMetadata: optional(func()),
    onLoadedMetadataCapture: optional(func()),
    onLoadStart: optional(func()),
    onLoadStartCapture: optional(func()),
    onPause: optional(func()),
    onPauseCapture: optional(func()),
    onPlay: optional(func()),
    onPlayCapture: optional(func()),
    onPlaying: optional(func()),
    onPlayingCapture: optional(func()),
    onProgress: optional(func()),
    onProgressCapture: optional(func()),
    onRateChange: optional(func()),
    onRateChangeCapture: optional(func()),
    onSeeked: optional(func()),
    onSeekedCapture: optional(func()),
    onSeeking: optional(func()),
    onSeekingCapture: optional(func()),
    onStalled: optional(func()),
    onStalledCapture: optional(func()),
    onSuspend: optional(func()),
    onSuspendCapture: optional(func()),
    onTimeUpdate: optional(func()),
    onTimeUpdateCapture: optional(func()),
    onVolumeChange: optional(func()),
    onVolumeChangeCapture: optional(func()),
    onWaiting: optional(func()),
    onWaitingCapture: optional(func()),

    // MouseEvents
    onAuxClick: optional(func()),
    onAuxClickCapture: optional(func()),
    onClick: optional(func()),
    onClickCapture: optional(func()),
    onContextMenu: optional(func()),
    onContextMenuCapture: optional(func()),
    onDoubleClick: optional(func()),
    onDoubleClickCapture: optional(func()),
    onDrag: optional(func()),
    onDragCapture: optional(func()),
    onDragEnd: optional(func()),
    onDragEndCapture: optional(func()),
    onDragEnter: optional(func()),
    onDragEnterCapture: optional(func()),
    onDragExit: optional(func()),
    onDragExitCapture: optional(func()),
    onDragLeave: optional(func()),
    onDragLeaveCapture: optional(func()),
    onDragOver: optional(func()),
    onDragOverCapture: optional(func()),
    onDragStart: optional(func()),
    onDragStartCapture: optional(func()),
    onDrop: optional(func()),
    onDropCapture: optional(func()),
    onMouseDown: optional(func()),
    onMouseDownCapture: optional(func()),
    onMouseEnter: optional(func()),
    onMouseLeave: optional(func()),
    onMouseMove: optional(func()),
    onMouseMoveCapture: optional(func()),
    onMouseOut: optional(func()),
    onMouseOutCapture: optional(func()),
    onMouseOver: optional(func()),
    onMouseOverCapture: optional(func()),
    onMouseUp: optional(func()),
    onMouseUpCapture: optional(func()),

    // Selection Events
    onSelect: optional(func()),
    onSelectCapture: optional(func()),

    // Touch Events
    onTouchCancel: optional(func()),
    onTouchCancelCapture: optional(func()),
    onTouchEnd: optional(func()),
    onTouchEndCapture: optional(func()),
    onTouchMove: optional(func()),
    onTouchMoveCapture: optional(func()),
    onTouchStart: optional(func()),
    onTouchStartCapture: optional(func()),

    // Pointer Events
    onPointerDown: optional(func()),
    onPointerDownCapture: optional(func()),
    onPointerMove: optional(func()),
    onPointerMoveCapture: optional(func()),
    onPointerUp: optional(func()),
    onPointerUpCapture: optional(func()),
    onPointerCancel: optional(func()),
    onPointerCancelCapture: optional(func()),
    onPointerEnter: optional(func()),
    onPointerEnterCapture: optional(func()),
    onPointerLeave: optional(func()),
    onPointerLeaveCapture: optional(func()),
    onPointerOver: optional(func()),
    onPointerOverCapture: optional(func()),
    onPointerOut: optional(func()),
    onPointerOutCapture: optional(func()),
    onGotPointerCapture: optional(func()),
    onGotPointerCaptureCapture: optional(func()),
    onLostPointerCapture: optional(func()),
    onLostPointerCaptureCapture: optional(func()),

    // UI Events
    onScroll: optional(func()),
    onScrollCapture: optional(func()),

    // Wheel Events
    onWheel: optional(func()),
    onWheelCapture: optional(func()),

    // Animation Events
    onAnimationStart: optional(func()),
    onAnimationStartCapture: optional(func()),
    onAnimationEnd: optional(func()),
    onAnimationEndCapture: optional(func()),
    onAnimationIteration: optional(func()),
    onAnimationIterationCapture: optional(func()),

    // Transition Events
    onTransitionEnd: optional(func()),
    onTransitionEndCapture: optional(func()),
});
