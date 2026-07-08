# Digital Farm Management Portal - Technical Architecture

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Frontend Architecture](#frontend-architecture)
3. [Component Structure](#component-structure)
4. [State Management](#state-management)
5. [Routing](#routing)
6. [Data Flow](#data-flow)
7. [UI Framework](#ui-framework)
8. [Styling](#styling)
9. [Build & Deployment](#build--deployment)
10. [Performance](#performance)
11. [Best Practices](#best-practices)

---

## Architecture Overview

### **High-Level Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                     Browser / Client                        │
│                 Digital Farm Management Portal              │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ React Components (UI Layer)                            │ │
│  │  - Pages (Routes)                                      │ │
│  │  - Layouts (AppShell)                                  │ │
│  │  - UI Components (Radix-based)                         │ │
│  │  - Hooks (Custom & React hooks)                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                          ↑ ↓                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ State Management Layer                                 │ │
│  │  - React Context (Theme, Language)                     │ │
│  │  - React Hooks (Local state)                           │ │
│  │  - React Query (Server state)                          │ │
│  │  - React Hook Form (Form state)                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                          ↑ ↓                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Data & Utilities Layer                                 │ │
│  │  - API calls (mock-data.ts)                            │ │
│  │  - Session management                                  │ │
│  │  - Internationalization (i18n)                         │ │
│  │  - Error handling                                      │ │
│  │  - Utilities (date, validation, etc.)                  │ │
│  │  - Export utilities (CSV, PDF)                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                          ↑ ↓                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Routing Layer (TanStack Router)                        │ │
│  │  - File-based routes                                   │ │
│  │  - Type-safe navigation                                │ │
│  │  - Route parameters                                    │ │
│  │  - Route guards (future)                               │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
└─────────────────────────────────────────────────────────────┘
                             ↑ ↓
           (HTTP - Future Backend Integration)
                             
           ┌────────────────────────────┐
           │   Backend Services         │
           │  (To be implemented)       │
           │  - Authentication API      │
           │  - Data API                │
           │  - File Upload             │
           └────────────────────────────┘
```

### **Technology Stack**

**Core Framework**:
- React 18 - UI rendering
- TypeScript - Type safety
- TanStack Start - Full-stack framework
- TanStack Router - Type-safe routing
- Vite - Build tool

**State & Data**:
- React Query - Server state management
- React Hooks - Local state management
- React Hook Form - Form management
- React Context - Theme & language

**UI Components**:
- Radix UI - Accessible component primitives
- Tailwind CSS - Utility styling
- Lucide Icons - Icon library
- Sonner - Toast notifications

**Utilities**:
- date-fns - Date manipulation
- class-variance-authority - Component variants
- clsx - Conditional classnames

---

## Frontend Architecture

### **Directory Structure**

```
src/
├── components/              # React components
│   ├── ui/                 # Radix UI based components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── dialog.tsx
│   │   ├── sidebar.tsx
│   │   └── ...more UI components
│   ├── AppShell.tsx        # Main layout wrapper
│   ├── PageHeader.tsx      # Page title & actions
│   ├── StatCard.tsx        # Statistics display
│   ├── StatusBadge.tsx     # Status indicator
│
├── hooks/                  # Custom React hooks
│   └── use-mobile.tsx     # Mobile detection hook
│
├── lib/                    # Utility functions & services
│   ├── audit.ts           # Audit logging
│   ├── error-capture.ts   # Error boundaries
│   ├── error-page.ts      # Error display
│   ├── export.ts          # CSV/PDF export utilities
│   ├── i18n.tsx           # Internationalization
│   ├── mock-data.ts       # Mock data for demo
│   ├── notifications-store.ts  # Notification state
│   ├── session.ts         # Session management
│   └── utils.ts           # General utilities
│
├── routes/                 # Page routes (file-based)
│   ├── __root.tsx         # Root layout
│   ├── index.tsx          # Login page
│   ├── app.tsx            # App layout
│   ├── app.farmer.index.tsx        # Farmer dashboard
│   ├── app.farmer.animals.tsx      # Farmer animals
│   ├── app.farmer.prescriptions.tsx # Prescriptions
│   ├── app.vet.index.tsx           # Vet dashboard
│   ├── app.vet.issue.tsx           # Issue prescription
│   ├── app.regulator.index.tsx     # Regulator dashboard
│   ├── app.lab.index.tsx           # Lab dashboard
│   ├── app.admin.index.tsx         # Admin dashboard
│   ├── app.admin.users.tsx         # User management
│   ├── app.admin.settings.tsx      # Settings
│   ├── app.admin.audit.tsx         # Audit logs
│   ├── app.profile.tsx             # User profile
│   └── ...more routes
│
├── router.tsx             # Router configuration
├── routeTree.gen.ts       # Generated route tree
├── server.ts              # Server setup (TanStack Start)
├── start.ts               # App entry point
├── styles.css             # Global styles
│
└── public/               # Static assets
    ├── images/
    └── favicons/
```

---

## Component Structure

### **Component Hierarchy**

```
<Root>
  ├── <Header>
  │   ├── Government Branding
  │   ├── Language Selector
  │   ├── Logo & Title
  │   ├── Notifications Bell
  │   ├── User Menu
  │   └── Theme Toggle
  │
  ├── <MainLayout>
  │   ├── <Sidebar>
  │   │   ├── Navigation Links
  │   │   ├── Role-based Menu
  │   │   └── Collapsible
  │   │
  │   └── <MainContent>
  │       ├── <PageHeader>
  │       │   ├── Title
  │       │   ├── Subtitle
  │       │   └── Action Buttons
  │       │
  │       ├── <StatCards>
  │       │   ├── Card 1
  │       │   ├── Card 2
  │       │   ├── Card 3
  │       │   └── Card 4
  │       │
  │       ├── <ContentSections>
  │       │   ├── Tables
  │       │   ├── Forms
  │       │   ├── Charts
  │       │   └── Cards
  │       │
  │       └── <Modals/Dialogs>
  │           ├── Confirmation
  │           ├── Forms
  │           └── Alerts
  │
  ├── <Footer>
  └── <Notifications Toast>
```

### **Key Components**

**Layout Components**:
- `<AppShell>` - Main application wrapper
- `<PageHeader>` - Page title and actions
- `<Sidebar>` - Navigation sidebar
- `<RootLayout>` - Root page layout

**Content Components**:
- `<StatCard>` - Metric display card
- `<StatusBadge>` - Status indicator
- Tables with sorting/filtering
- Forms with validation
- Charts for analytics

**UI Components** (from Radix UI):
- Button, Input, Select, Checkbox
- Form, Label, Textarea
- Dialog, Sheet, Popover
- Table, Tabs, Accordion
- Card, Separator, Badge
- Avatar, Tooltip, Alert

---

## State Management

### **State Layers**

**1. Global State** (Context API)

```typescript
// Theme Context
export const ThemeContext = createContext({
  theme: 'light' | 'dark',
  toggleTheme: () => {}
});

// Language Context
export const LanguageContext = createContext({
  lang: 'en' | 'hi' | 'te' | 'ta' | 'mr',
  setLang: (lang) => {},
  t: (key) => string
});

// Session Context
export const SessionContext = createContext({
  role: Role,
  username: string,
  logout: () => {}
});
```

**2. Server State** (React Query)

```typescript
// Example: Fetching farms
const { data: farms, isLoading, error } = useQuery({
  queryKey: ['farms'],
  queryFn: () => fetchFarms(),
  staleTime: 5 * 60 * 1000 // 5 minutes
});

// Example: Mutations
const mutation = useMutation({
  mutationFn: (treatment: Treatment) => logTreatment(treatment),
  onSuccess: () => {
    queryClient.invalidateQueries(['treatments']);
  }
});
```

**3. Local Component State** (useState)

```typescript
const [isOpen, setIsOpen] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [selectedRole, setSelectedRole] = useState<Role>('farmer');
```

**4. Form State** (React Hook Form)

```typescript
const form = useForm<TreatmentForm>({
  resolver: zodResolver(treatmentSchema),
  defaultValues: { drug: '', dose: '', duration: 5 }
});

const { register, handleSubmit, formState: { errors } } = form;
```

### **Data Flow Pattern**

```
User Interaction (Click, Type, Submit)
           ↓
Event Handler / Form Submit
           ↓
Update State (useState, React Hook Form)
           ↓
Trigger API Call (React Query useMutation)
           ↓
API Request (Future: to backend)
           ↓
Response / Error
           ↓
Update Cache (React Query)
           ↓
Re-render Component
           ↓
UI Update with New Data
```

---

## Routing

### **TanStack Router Implementation**

**File-Based Routing**:
```
app.tsx → /app
app.farmer.index.tsx → /app/farmer
app.farmer.animals.tsx → /app/farmer/animals
app.vet.index.tsx → /app/vet
app.vet.issue.tsx → /app/vet/issue
app.animals.$id.tsx → /app/animals/:id
```

**Route Configuration**:
```typescript
// src/router.tsx
import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'

export const rootRoute = createRootRoute({
  component: Root,
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Login,
})

export const appRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'app',
  component: AppLayout,
})

export const farmerRoute = createRoute({
  getParentRoute: () => appRoute,
  path: '/farmer',
  component: FarmerDashboard,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  appRoute.addChildren([
    farmerRoute,
    // ... more routes
  ])
])

export const router = createRouter({ routeTree })
```

**Type-Safe Navigation**:
```typescript
// Navigation is fully typed
const navigate = useNavigate()

navigate({
  to: '/app/animals/$id',
  params: { id: 'BR-001' },
  search: { tab: 'treatments' }
})

// Link component is also typed
<Link to="/app/farmer/animals" params={{ id: animal.id }}>
  View Animal
</Link>
```

---

## Data Flow

### **Treatment Logging Flow**

```
1. Farmer Form Submission
   └── LogTreatmentForm Component

2. Form Validation
   └── React Hook Form + Zod validator
   
3. API Call
   └── useMutation(() => logTreatment(data))
   
4. Backend Processing (Future)
   └── POST /api/treatments
   └── Calculate withdrawal period
   └── Return treatment record
   
5. Cache Update
   └── React Query invalidates 'treatments' query
   └── Refetch from server or update cache
   
6. UI Update
   └── Component re-renders with new data
   └── Show success toast notification
   
7. State Update
   └── Session updated with treatment info
   └── Dashboard metrics recalculated
```

### **Compliance Calculation Flow**

```
Treatment Logged
└── Drug selected from formulary
    └── Dose: 10 mg/kg
    └── Species: Cattle
    └── MRL: 28 days (meat)
    
└── System calculates:
    └── Treatment start: June 15, 2025
    └── Withdrawal: 28 days
    └── Clearance date: July 13, 2025
    
└── Daily tracking:
    └── June 16: 27 days remaining
    └── June 17: 26 days remaining
    └── ...
    └── July 12: 1 day remaining (Alert!)
    └── July 13: 0 days (Cleared!)
    
└── Compliance score:
    └── Calculate for all animals
    └── Update farm compliance %
    └── Display on dashboard
```

---

## UI Framework

### **Radix UI Components**

**Component Library Structure**:
```
components/ui/
├── button.tsx           # <Button> - Click interactions
├── input.tsx            # <Input> - Text input
├── select.tsx           # <Select> - Dropdown selection
├── form.tsx             # <Form> - Form wrapper
├── label.tsx            # <Label> - Input labels
├── card.tsx             # <Card> - Content container
├── table.tsx            # <Table> - Data display
├── tabs.tsx             # <Tabs> - Content tabs
├── dialog.tsx           # <Dialog> - Modal dialogs
├── sidebar.tsx          # <Sidebar> - Navigation
├── badge.tsx            # <Badge> - Status indicator
├── alert.tsx            # <Alert> - Alert messages
└── ... (20+ components)
```

**Component Pattern**:
```typescript
// Example: Button Component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
```

### **Accessibility Features**

- ✅ Semantic HTML
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus management
- ✅ Color contrast compliance
- ✅ Touch target sizes

---

## Styling

### **Tailwind CSS Implementation**

**Utility-First Approach**:
```tsx
// Direct Tailwind classes
<div className="flex items-center justify-between gap-4 px-6 py-4 bg-white rounded-lg border">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
    Action
  </button>
</div>
```

**Class Variance Authority for Variants**:
```typescript
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent',
        danger: 'bg-destructive text-white hover:bg-destructive/90'
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg'
      }
    }
  }
)
```

**Design System Colors**:
- Primary: Government Green (#10b981)
- Success: Green (#22c55e)
- Warning: Amber (#f59e0b)
- Danger: Red (#ef4444)
- Background: White (#ffffff)
- Text: Gray (#1f2937)

---

## Build & Deployment

### **Development**

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → http://localhost:5174

# Linting
npm run lint

# Formatting
npm run format
```

### **Production Build**

```bash
# Build for production
npm run build
# → Creates optimized dist/ folder

# Development build (for debugging)
npm run build:dev

# Preview production build locally
npm run preview
```

### **Build Output**

```
dist/
├── index.html           # Entry HTML
├── _app/                # App bundle
│   ├── chunk-1.js
│   ├── chunk-2.js
│   └── ...
├── assets/              # CSS, images
│   ├── style-abc123.css
│   └── images/
└── manifest.json        # PWA manifest (future)
```

### **Build Optimizations**

- ✅ Code splitting by route
- ✅ Tree shaking (unused code removal)
- ✅ Minification (JS, CSS)
- ✅ Image optimization
- ✅ Source maps (dev only)
- ✅ Lazy loading components
- ✅ CSS optimization
- ✅ Bundle analysis

---

## Performance

### **Optimization Strategies**

**1. Code Splitting**
- Routes loaded on-demand
- Component lazy loading
- Library code separation

**2. Caching**
- Browser cache headers
- React Query cache
- LocalStorage for preferences
- Service Worker (future)

**3. Rendering Optimization**
- React.memo for components
- useMemo for expensive computations
- useCallback for event handlers
- Virtual scrolling for large lists

**4. Asset Optimization**
- Image format optimization
- CSS minification
- JS minification
- Font optimization
- SVG optimization

**5. Network Optimization**
- Gzip compression
- CDN delivery
- HTTP/2 multiplexing
- Prefetching (future)

### **Performance Monitoring**

```typescript
// Example: Monitoring component render time
import { Profiler } from 'react'

function onRenderCallback(
  id: string,
  phase: 'mount' | 'update',
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: Set<any>
) {
  console.log(`${id} (${phase}) took ${actualDuration}ms`)
}

<Profiler id="DashboardSection" onRender={onRenderCallback}>
  <Dashboard />
</Profiler>
```

---

## Best Practices

### **Code Organization**

✅ **Single Responsibility**: Each component/function does one thing
✅ **Type Safety**: Full TypeScript coverage
✅ **Naming Conventions**: Clear, descriptive names
✅ **Error Handling**: Try-catch, error boundaries
✅ **Comments**: Meaningful comments for complex logic

### **Component Best Practices**

✅ Functional components with hooks
✅ Prop destructuring
✅ Forward refs where needed
✅ Compound components for complex UIs
✅ Accessibility built-in

### **State Management**

✅ Keep state as local as possible
✅ Use Context only for global state
✅ React Query for server state
✅ React Hook Form for form state
✅ Redux (not used - unnecessary complexity)

### **Performance**

✅ Lazy load routes
✅ Memoize expensive computations
✅ Avoid unnecessary re-renders
✅ Use virtual scrolling for large lists
✅ Optimize images

### **Testing** (Recommended for production)

✅ Unit tests (Jest)
✅ Component tests (React Testing Library)
✅ Integration tests
✅ E2E tests (Playwright, Cypress)

### **Security**

✅ Input validation
✅ Output encoding
✅ HTTPS only
✅ Content Security Policy
✅ CORS configuration
✅ Dependency scanning

### **Accessibility**

✅ Semantic HTML
✅ ARIA attributes
✅ Keyboard navigation
✅ Color contrast
✅ Focus indicators
✅ Screen reader testing

---

## Future Enhancements

### **Backend Integration**
- [ ] REST API endpoints
- [ ] Database schema
- [ ] Authentication service
- [ ] Business logic layer

### **Advanced Features**
- [ ] Real-time updates (WebSocket)
- [ ] Offline support (Service Workers)
- [ ] Progressive Web App (PWA)
- [ ] Mobile app (React Native)

### **Performance**
- [ ] GraphQL for efficient querying
- [ ] Microservices architecture
- [ ] Caching layer (Redis)
- [ ] Database optimization

### **Developer Experience**
- [ ] Storybook for components
- [ ] API mocking (MSW)
- [ ] Development tools/extensions
- [ ] Documentation generation

---

**Last Updated**: June 2025
**Version**: 1.0
**Architecture Pattern**: Component-based with React hooks and context
