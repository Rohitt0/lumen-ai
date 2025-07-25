import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowUp, Paperclip, Square, X, Globe, BrainCog } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function for className merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

// --- HELPER & SUB-COMPONENTS START ---

const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex w-full rounded-md border-none bg-transparent px-3 py-2.5 text-base text-gray-100 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px] resize-none",
      className
    )}
    ref={ref}
    rows={1}
    {...props}
  />
));
Textarea.displayName = "Textarea";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-[#333333] bg-[#1F2023] px-3 py-1.5 text-sm text-white shadow-md",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90vw] md:max-w-[800px] translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#333333] bg-[#1F2023] p-0 shadow-xl rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 z-10 rounded-full bg-[#2E3033]/80 p-2 hover:bg-[#2E3033] transition-all">
        <X className="h-5 w-5 text-gray-200 hover:text-white" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight text-gray-100", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-white hover:bg-white/80 text-black",
      outline: "border border-[#444444] bg-transparent hover:bg-[#3A3A40]",
      ghost: "bg-transparent hover:bg-[#3A3A40]",
    };
    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6",
      icon: "h-8 w-8 rounded-full aspect-[1/1]",
    };
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const ImageViewDialog = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;
  return (
    <Dialog open={!!imageUrl} onOpenChange={onClose}>
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-[90vw] md:max-w-[800px]">
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2, ease: "easeOut" }} className="relative bg-[#1F2023] rounded-2xl overflow-hidden shadow-2xl" >
          <img src={imageUrl} alt="Full preview" className="w-full max-h-[80vh] object-contain rounded-2xl" />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

const PromptInputContext = React.createContext({ isLoading: false, value: "", setValue: () => {}, maxHeight: 240, onSubmit: undefined, disabled: false, });
function usePromptInput() {
  const context = React.useContext(PromptInputContext);
  if (!context) throw new Error("usePromptInput must be used within a PromptInput");
  return context;
}

const PromptInput = React.forwardRef( ({ className, isLoading = false, maxHeight = 240, value, onValueChange, onSubmit, children, disabled = false, onDragOver, onDragLeave, onDrop, }, ref) => {
    // This component now correctly uses the props from the context provider
    return (
      <TooltipProvider>
        <PromptInputContext.Provider value={{ isLoading, value, setValue: onValueChange, maxHeight, onSubmit, disabled, }} >
          <div ref={ref} className={cn("rounded-3xl border border-[#444444] bg-[#1F2023] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300", isLoading && "border-red-500/70", className)} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop} >
            {children}
          </div>
        </PromptInputContext.Provider>
      </TooltipProvider>
    );
  }
);
PromptInput.displayName = "PromptInput";

const PromptInputTextarea = ({ className, onKeyDown, disableAutosize = false, placeholder, ...props }) => {
  const { value, setValue, maxHeight, onSubmit, disabled } = usePromptInput();
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    if (disableAutosize || !textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = typeof maxHeight === "number" ? `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px` : `min(${textareaRef.current.scrollHeight}px, ${maxHeight})`;
  }, [value, maxHeight, disableAutosize]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit?.();
    }
    onKeyDown?.(e);
  };

  return ( <Textarea ref={textareaRef} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} className={cn("text-base", className)} disabled={disabled} placeholder={placeholder} {...props} /> );
};

const PromptInputActions = ({ children, className, ...props }) => ( <div className={cn("flex items-center gap-2", className)} {...props}> {children} </div> );

const PromptInputAction = ({ tooltip, children, className, side = "top", ...props }) => {
  const { disabled } = usePromptInput();
  return (
    <Tooltip {...props}>
      <TooltipTrigger asChild disabled={disabled}>
        {children}
      </TooltipTrigger>
      <TooltipContent side={side} className={className}>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  );
};

const CustomDivider = () => ( <div className="relative h-6 w-[1.5px] mx-1"> <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#9b87f5]/70 to-transparent rounded-full" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)", }} /> </div> );


// --- MAIN COMPONENT START ---

const PromptInputBox = React.forwardRef((props, ref) => {
  // 1. Accept 'value' and 'onValueChange' from props
  const { onSend = () => {}, isLoading = false, placeholder = "Type your message here...", className, value, onValueChange } = props;
  
  // 2. REMOVED the internal 'input' state. It will now be controlled by the parent.
  
  const [files, setFiles] = React.useState([]);
  const [filePreviews, setFilePreviews] = React.useState({});
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showThink, setShowThink] = React.useState(false);
  const uploadInputRef = React.useRef(null);
  const promptBoxRef = React.useRef(null);

  const handleToggleChange = (value) => {
    if (value === "search") {
      setShowSearch((prev) => !prev);
      setShowThink(false);
    } else if (value === "think") {
      setShowThink((prev) => !prev);
      setShowSearch(false);
    }
  };

  const isImageFile = (file) => file.type.startsWith("image/");
  const processFile = (file) => {
    if (!isImageFile(file) || file.size > 10 * 1024 * 1024) {
      console.log("Only image files under 10MB are allowed.");
      return;
    }
    setFiles([file]);
    const reader = new FileReader();
    reader.onload = (e) => setFilePreviews({ [file.name]: e.target?.result });
    reader.readAsDataURL(file);
  };

  const handleDragOver = React.useCallback((e) => { e.preventDefault(); e.stopPropagation(); }, []);
  const handleDragLeave = React.useCallback((e) => { e.preventDefault(); e.stopPropagation(); }, []);
  const handleDrop = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const imageFile = droppedFiles.find(isImageFile);
    if (imageFile) processFile(imageFile);
  }, []);

  const handleRemoveFile = (index) => {
    const fileToRemove = files[index];
    if (fileToRemove) {
      const newPreviews = { ...filePreviews };
      delete newPreviews[fileToRemove.name];
      setFilePreviews(newPreviews);
    }
    setFiles(files.filter((_, i) => i !== index));
  };

  const openImageModal = (imageUrl) => setSelectedImage(imageUrl);
  const handlePaste = React.useCallback((e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.includes("image")) {
        const file = items[i].getAsFile();
        if (file) {
          e.preventDefault();
          processFile(file);
          break;
        }
      }
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [handlePaste]);

  const handleSubmit = () => {
    // 3. Use 'value' from props instead of the internal state
    if (value.trim() || files.length > 0) {
      let messagePrefix = "";
      if (showSearch) messagePrefix = "[Search: ";
      else if (showThink) messagePrefix = "[Think: ";
      const formattedInput = messagePrefix ? `${messagePrefix}${value}]` : value;
      onSend(formattedInput, files);
      // The parent component is now responsible for clearing the input
      setFiles([]);
      setFilePreviews({});
    }
  };

  const hasContent = value && value.trim() !== "" || files.length > 0;

  return (
    <>
      {/* 4. Pass the 'value' and 'onValueChange' props down to the context provider */}
      <PromptInput value={value} onValueChange={onValueChange} isLoading={isLoading} onSubmit={handleSubmit} className={cn("w-full bg-[#1F2023] border-[#444444] shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300 ease-in-out", className)} disabled={isLoading} ref={ref || promptBoxRef} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        {files.length > 0 && (
          <div className="flex flex-wrap gap-2 p-0 pb-1 transition-all duration-300">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                {file.type.startsWith("image/") && filePreviews[file.name] && (
                  <div className="w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300" onClick={() => openImageModal(filePreviews[file.name])}>
                    <img src={filePreviews[file.name]} alt={file.name} className="h-full w-full object-cover" />
                    <button onClick={(e) => { e.stopPropagation(); handleRemoveFile(index); }} className="absolute top-1 right-1 rounded-full bg-black/70 p-0.5 opacity-100 transition-opacity">
                      <X className="h-3 w-3 text-white" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="opacity-100">
          <PromptInputTextarea placeholder={ showSearch ? "Search the web..." : showThink ? "Think deeply..." : placeholder } className="text-base" />
        </div>
        
        <PromptInputActions className="flex items-center justify-between gap-2 p-0 pt-2">
          <div className="flex items-center gap-1">
            <PromptInputAction tooltip="Upload image">
              <button onClick={() => uploadInputRef.current?.click()} className="flex h-8 w-8 text-[#9CA3AF] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-600/30 hover:text-[#D1D5DB]">
                <Paperclip className="h-5 w-5 transition-colors" />
                <input ref={uploadInputRef} type="file" className="hidden" onChange={(e) => { if (e.target.files && e.target.files.length > 0) processFile(e.target.files[0]); if (e.target) e.target.value = ""; }} accept="image/*" />
              </button>
            </PromptInputAction>
            <div className="flex items-center">
              <button type="button" onClick={() => handleToggleChange("search")} className={cn("rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8", showSearch ? "bg-[#1EAEDB]/15 border-[#1EAEDB] text-[#1EAEDB]" : "bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]")}>
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <motion.div animate={{ rotate: showSearch ? 360 : 0, scale: showSearch ? 1.1 : 1 }} whileHover={{ rotate: showSearch ? 360 : 15, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 10 } }} transition={{ type: "spring", stiffness: 260, damping: 25 }}>
                    <Globe className={cn("w-4 h-4", showSearch ? "text-[#1EAEDB]" : "text-inherit")} />
                  </motion.div>
                </div>
                <AnimatePresence>{showSearch && ( <motion.span initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-xs overflow-hidden whitespace-nowrap text-[#1EAEDB] flex-shrink-0"> Search </motion.span>)}</AnimatePresence>
              </button>
              <CustomDivider />
              <button type="button" onClick={() => handleToggleChange("think")} className={cn("rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8", showThink ? "bg-[#8B5CF6]/15 border-[#8B5CF6] text-[#8B5CF6]" : "bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]")}>
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <motion.div animate={{ rotate: showThink ? 360 : 0, scale: showThink ? 1.1 : 1 }} whileHover={{ rotate: showThink ? 360 : 15, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 10 } }} transition={{ type: "spring", stiffness: 260, damping: 25 }}>
                    <BrainCog className={cn("w-4 h-4", showThink ? "text-[#8B5CF6]" : "text-inherit")} />
                  </motion.div>
                </div>
                <AnimatePresence>{showThink && ( <motion.span initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-xs overflow-hidden whitespace-nowrap text-[#8B5CF6] flex-shrink-0"> Think </motion.span> )}</AnimatePresence>
              </button>
            </div>
          </div>
          <PromptInputAction tooltip={ isLoading ? "Stop generation" : "Send message" }>
            <Button variant="default" size="icon" className="h-8 w-8 rounded-full" onClick={handleSubmit} disabled={isLoading || !hasContent}>
              {isLoading ? <Square className="h-4 w-4 fill-[#1F2023] animate-pulse" /> : <ArrowUp className="h-4 w-4 text-[#1F2023]" />}
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
      <ImageViewDialog imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
});
PromptInputBox.displayName = "PromptInputBox";

// Add this export line at the very bottom of the file
export { PromptInputBox };
