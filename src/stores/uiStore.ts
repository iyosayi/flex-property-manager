import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Helper function to detect if we're on mobile
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768; // Same breakpoint as useIsMobile hook
};

export interface UIState {
  // RightSidebar state
  isRightSidebarOpen: boolean;
  isMobile: boolean;
  
  // Actions
  toggleRightSidebar: () => void;
  setRightSidebarOpen: (isOpen: boolean) => void;
  setMobile: (isMobile: boolean) => void;
  handleResize: () => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set, get) => ({
      // Initial state - collapsed on mobile, open on desktop
      isRightSidebarOpen: !isMobileDevice(),
      isMobile: isMobileDevice(),
      
      // Actions
      toggleRightSidebar: () => 
        set((state) => ({ 
          isRightSidebarOpen: !state.isRightSidebarOpen 
        }), false, 'toggleRightSidebar'),
      
      setRightSidebarOpen: (isOpen) => 
        set({ isRightSidebarOpen: isOpen }, false, 'setRightSidebarOpen'),
      
      setMobile: (isMobile) => 
        set({ isMobile }, false, 'setMobile'),
      
      handleResize: () => {
        const newIsMobile = isMobileDevice();
        const currentState = get();
        
        // If switching from desktop to mobile, close sidebar
        // If switching from mobile to desktop, keep current state
        if (newIsMobile && !currentState.isMobile) {
          set({ isMobile: newIsMobile, isRightSidebarOpen: false }, false, 'handleResize/mobile');
        } else if (!newIsMobile && currentState.isMobile) {
          set({ isMobile: newIsMobile }, false, 'handleResize/desktop');
        }
      },
    }),
    {
      name: 'ui-store', // unique name for devtools
    }
  )
);
