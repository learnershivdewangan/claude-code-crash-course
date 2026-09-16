import { Hook, HookCategory } from '@/types/hook';

interface HookCardProps {
  hook: Hook;
}

const categoryStyles: Record<string, { bg: string; text: string }> = {
  [HookCategory.MONITORING]: { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
  [HookCategory.SECURITY]: { bg: 'bg-red-500/10', text: 'text-red-600 dark:text-red-400' },
  [HookCategory.WORKFLOW]: { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400' },
  [HookCategory.TESTING]: { bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400' },
  [HookCategory.INTEGRATION]: { bg: 'bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400' },
  [HookCategory.UTILITY]: { bg: 'bg-slate-500/10', text: 'text-slate-600 dark:text-slate-400' },
  [HookCategory.LEARNING]: { bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400' },
  [HookCategory.TEAM]: { bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400' },
};

const languageColors: Record<string, string> = {
  'Python': 'bg-[#3776ab]',
  'JavaScript': 'bg-[#f7df1e]',
  'TypeScript': 'bg-[#3178c6]',
  'PHP': 'bg-[#777bb4]',
  'Go': 'bg-[#00add8]',
};

// Utility function to merge class names
const cn = (...classes: string[]): string => classes.filter(Boolean).join(' ');

export default function HookCard({ hook }: HookCardProps) {
  const categoryStyle = categoryStyles[hook.category] || { bg: 'bg-slate-500/10', text: 'text-slate-600' };

  return (
    <article
      className={cn(
        'group relative',
        'bg-[var(--background)]',
        'border border-[var(--border)]',
        'rounded-xl',
        'p-6',
        'hover:border-[var(--primary)]/40',
        'hover:shadow-lg',
        'hover:shadow-[var(--primary)]/5',
        'transition-all',
        'duration-300',
        'hover:-translate-y-1'
      )}
    >
      {/* Featured badge */}
      {hook.featured && (
        <span
          className={cn(
            'absolute top-3 right-3',
            'flex items-center gap-1',
            'bg-[#d97757]',
            'text-white',
            'text-[10px]',
            'font-medium',
            'px-2.5',
            'py-1',
            'rounded-md',
            'uppercase',
            'tracking-wide'
          )}
          aria-label="Featured hook"
        >
          <svg
            className="w-2.5 h-2.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </span>
      )}

      <div className="flex flex-col gap-4">
        {/* Header */}
        <header className="flex items-start justify-between gap-3">
          <div>
            <h3
              className={cn(
                'text-lg',
                'font-semibold',
                'text-[var(--foreground)]',
                'leading-snug'
              )}
            >
              {hook.name}
            </h3>
          </div>

          {hook.stars && (
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#d97757]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-[var(--foreground)]">
                {hook.stars}
              </span>
            </div>
          )}
        </header>

        {/* Description */}
        <p
          className={cn(
            'text-sm',
            'text-[var(--slate-light)]',
            'leading-relaxed',
            'line-clamp-3'
          )}
        >
          {hook.description}
        </p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category badge */}
          <span
            className={cn(
              'inline-flex',
              'items-center',
              'text-xs',
              'font-medium',
              'px-3',
              'py-1.5',
              'rounded-md',
              categoryStyle.bg,
              categoryStyle.text
            )}
          >
            {hook.category}
          </span>

          {/* Language indicator */}
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'w-2.5',
                'h-2.5',
                'rounded-full',
                languageColors[hook.language] || 'bg-[var(--slate-light)]'
              )}
            ></div>
            <span
              className={cn(
                'text-xs',
                'text-[var(--slate-light)]'
              )}
            >
              {hook.language}
            </span>
          </div>

          {/* Hook types */}
          {hook.hookTypes.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {hook.hookTypes.map((type) => (
                <span
                  key={type}
                  className={cn(
                    'text-[11px]',
                    'bg-[var(--foreground)]/5',
                    'text-[var(--slate-light)]',
                    'px-2',
                    'py-0.5',
                    'rounded',
                    'font-mono'
                  )}
                >
                  {type}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                'text-xs',
                'text-[var(--slate-light)]'
              )}
            >
              By {hook.author}
            </span>
          </div>

          <a
            href={hook.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex',
              'items-center',
              'gap-2',
              'text-sm',
              'font-medium',
              'text-[var(--foreground)]',
              'hover:text-[#d97757]',
              'focus-visible:outline-none',
              'focus-visible:ring-2',
              'focus-visible:ring-[#d97757]',
              'focus-visible:ring-offset-2',
              'transition-colors'
            )}
          >
            View Source
            <svg
              className={cn(
                'w-4',
                'h-4',
                'opacity-50',
                'group-hover:translate-x-0.5',
                'transition-transform'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </footer>
      </div>
    </article>
  );
}