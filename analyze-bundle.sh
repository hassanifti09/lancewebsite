#!/bin/bash

echo "🚀 Running Next.js Bundle Analyzer..."
echo ""

# Run the build with bundle analyzer
ANALYZE=true npm run build

echo ""
echo "✅ Bundle analysis complete!"
echo "The browser should open automatically with the bundle visualization."
echo ""
echo "Tips for optimization:"
echo "1. Look for large dependencies that can be replaced with smaller alternatives"
echo "2. Check for duplicate modules that can be deduplicated"
echo "3. Identify code that can be lazy loaded"
echo "4. Remove unused imports and dead code"