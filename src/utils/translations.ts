/**
 * Translations
 * English and Arabic translations for the application
 */

export const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            problem: 'The Problem',
            advantage: 'Our Advantage',
            integration: 'Integration',
            security: 'Security',
            pricing: 'Pricing',
            getStarted: 'Request Private Access',
        },
        // Home Page
        home: {
            badge: '🔒 Invite-Only Model - Enterprise Excellence Guaranteed',
            headline: 'Audit before you submit. Prevent before they reject.',
            subheading: 'SAAEB is the smart tech shield protecting your medical facility\'s revenue cycle. We stop financial bleeding, block partial approvals, and perfectly align your claims with the most complex insurance rules. Operating strictly on an invite-only model to guarantee the highest service standards for our partners.',
            cta: 'Request Private Access',
            ctaDemo: 'Learn More',
            ctaNote: '✓ Enterprise-Grade Security • ✓ PDPL Compliant • ✓ 100% Saudi Data Sovereignty',
            
            // The Problem Section
            problemTitle: 'The "Insurance" Trap & Financial Bleeding',
            problemSubtitle: 'Understanding the challenges healthcare facilities face',
            // Features header (above the 3 cards)
            featuresTitle: 'The "Insurance" Trap & Financial Bleeding',
            featuresSubtitle: 'Practical remedies and platform capabilities that stop revenue loss',
            
            features: [
                {
                    icon: '⏳',
                    title: 'The Delay & Deferral Trap',
                    description: 'Resubmitting claims multiple times delays your payments. Once the patient leaves the facility, the insurance company loses the incentive to expedite your money.',
                },
                {
                    icon: '💸',
                    title: 'The Partial Approval Squeeze',
                    description: 'Insurance companies often approve claims partially, quietly swallowing your profit margins under the pretext of "unjustified services."',
                },
                {
                    icon: '🩸',
                    title: 'The Silent Bleeding',
                    description: 'Fear of rejection leads billing staff to under-code complex procedures, causing your facility to lose massive amounts of rightfully earned revenue.',
                },
            ],
            
            // How It Works / Advantage
            howTitle: 'The Brains Behind the Engine',
            howSubtitle: 'SAAEB is not just software; it is a fusion of advanced technology and elite human expertise.',
            
            howSteps: [
                {
                    number: '01',
                    title: 'Former Insurance Executives',
                    description: 'Our core team includes experts who previously wrote the rejection rules inside major insurance companies. We reverse-engineer their logic to ensure your claims pass.',
                },
                {
                    number: '02',
                    title: 'Clinical Review Board',
                    description: 'For highly complex cases, our integrated team of medical professionals and master coders provides a human layer of clinical review, building an unshakeable medical justification before submission.',
                },
            ],
            
            // Integration Section
            integrationTitle: 'Zero-Touch Readiness. Flexible Integration.',
            integrationSubtitle: 'Choose your path to seamless claim auditing',
            
            testimonials: [
                {
                    quote: 'Fast-Track Access: Start immediately by providing us with a dedicated Employee User Account on your current HIS system. Zero technical overhead on your IT team.',
                    author: 'Option 1',
                    role: 'Fast-Track Access',
                    avatar: '⚡',
                },
                {
                    quote: 'API Integration: Fully automated, real-time synchronization between your HIS and our engine for a completely hands-free auditing process leading straight to NPHIES.',
                    author: 'Option 2',
                    role: 'Full Automation',
                    avatar: '🔗',
                },
                {
                    quote: '100% Saudi hosted infrastructure ensures your patient data never leaves the Kingdom. Bank-grade encryption with complete data sovereignty.',
                    author: 'Security First',
                    role: 'Local Data Hosting',
                    avatar: '🔒',
                },
            ],

            testimonialsTitle: 'Trusted by teams around the world',
            testimonialsSubtitle: 'Read what our customers say about their experience',
            
            // CTA Section
            ctaFinal: 'Exclusive Access for Approved Medical Facilities',
            ctaFinalSubtitle: 'To maintain operational excellence and dedicate our full resources to our current partners, access to SAAEB is granted by evaluation.',
            ctaButton: 'Request Private Access',
        },

        // Features Page (Security & Compliance)
        features: {
            title: 'Enterprise-Grade Security',
            subtitle: 'Your Patients\' Data is a Red Line',
            description: 'At SAAEB, data security and regulatory compliance are non-negotiable.',
            features: [
                {
                    title: 'PDPL Compliant',
                    description: 'Strict adherence to the Saudi Personal Data Protection Law. We process, we protect, and we comply.',
                },
                {
                    title: 'Zero Data Retention',
                    description: 'We are a processing engine, not a storage warehouse. Patient records are automatically purged from our servers immediately after auditing.',
                },
                {
                    title: 'Bank-Grade Encryption',
                    description: 'End-to-end AES-256 encryption with 100% data sovereignty, hosted strictly on secure servers within the Kingdom of Saudi Arabia.',
                },
            ],
        },

        // Pricing Page
        pricing: {
            title: 'A Results-Driven Business Model',
            subtitle: 'We win only when you win',
            description: 'SAAEB operates on a unique success-fee model designed for maximum transparency and alignment with your facility\'s success.',
            popular: 'Most Popular',
            plans: [
                {
                    name: 'Success-Fee Model',
                    price: 'Competitive',
                    period: '% on successful claims',
                    description: 'Only pay on claims SAAEB successfully audits, protects, and gets fully paid by insurance',
                    features: [
                        'Zero setup fees',
                        'No licensing costs',
                        'No maintenance contracts',
                        'No hidden charges',
                        'Full transparency',
                        'Direct alignment with your success',
                    ],
                    popular: true,
                },
            ],
            cta: 'Request Private Access',
        },

        // Auth Pages (Hidden - Invite Only)
        auth: {
            login: {
                title: 'Welcome back',
                subtitle: 'Sign in to your account',
                email: 'Email',
                password: 'Password',
                rememberMe: 'Remember me',
                forgotPassword: 'Forgot password?',
                button: 'Sign In',
                signingIn: 'Signing in...',
                noAccount: "Don't have an account?",
                signupLink: 'Sign up for free',
            },
            signup: {
                title: 'Create your account',
                subtitle: 'Join thousands of teams using SAAEB',
                name: 'Full Name',
                email: 'Email',
                password: 'Password',
                confirmPassword: 'Confirm Password',
                agreeToTerms: 'I agree to the',
                termsOfService: 'Terms of Service',
                button: 'Create Account',
                creating: 'Creating account...',
                alreadyHaveAccount: 'Already have an account?',
                loginLink: 'Sign in',
            },
        },

        // Dashboard
        dashboard: {
            title: 'Dashboard',
            welcome: 'Welcome to your dashboard',
            overview: 'Overview',
            analytics: 'Analytics',
            settings: 'Settings',
            profile: 'Profile',
            projects: 'Projects',
            tasks: 'Tasks',
            stats: {
                totalUsers: 'Total Users',
                activeProjects: 'Active Projects',
                revenue: 'Revenue',
                pendingTasks: 'Pending Tasks',
            },
            charts: {
                revenueGrowth: 'Revenue & User Growth',
                projectsByCategory: 'Projects by Category',
                taskDistribution: 'Task Distribution',
                revenue: 'Revenue ($)',
                users: 'Users',
                completed: 'Completed',
                inProgress: 'In Progress',
            },
            recentActivity: 'Recent Activity',
            recentProjectActivities: 'Recent Project Activities',
        },

        // Common
        common: {
            loading: 'Loading...',
            error: 'Error',
            success: 'Success',
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            edit: 'Edit',
            back: 'Back',
            logOut: 'Log Out',
            or: 'OR',
            passwordStrength: {
                weak: 'Weak',
                medium: 'Medium',
                strong: 'Strong',
            },
        },
    },
    ar: {
        // Navigation
        nav: {
            home: 'الرئيسية',
            problem: 'المشكلة',
            advantage: 'ميزتنا',
            integration: 'التكامل',
            security: 'الأمان',
            features: 'الميزات',
            pricing: 'الأسعار',
            login: 'دخول',
            getStarted: 'ابدأ الآن',
        },
        // Home Page
        home: {
            badge: '🎉 جديد: رؤى تعتمد على الذكاء الاصطناعي متاحة الآن',
            headline: 'حول عملك باستخدام SAAEB',
            subheading: 'المنصة الشاملة التي تمكن الفرق من التعاون والعمل بكفاءة وتحقيق النمو بسهولة. انضم إلى آلاف الشركات التي تحول عملياتها بالفعل.',
            cta: 'ابدأ الفترة التجريبية المجانية',
            ctaDemo: 'اعرض العرض التوضيحي',
            ctaNote: '✓ لا توجد بطاقة ائتمان مطلوبة • ✓ فترة تجريبية لمدة 14 يوماً • ✓ الإلغاء في أي وقت',
            
            // Stats
            stats: {
                users: 'مستخدمون نشطون',
                uptime: 'ضمان التوافر',
                countries: 'دول',
                rating: 'تقييم المستخدمين',
            },
            
            // Features Section
            featuresTitle: 'كل ما تحتاجه للنجاح',
            featuresSubtitle: 'ميزات قوية مصممة لتبسيط سير العمل وزيادة الإنتاجية',
            
            features: [
                {
                    icon: '⏳',
                    title: 'فخ التأخير والتسويف',
                    description: 'إعادة تقديم المطالبات مرات متعددة تؤخر المدفوعات. وبعد مغادرة المريض للمرفق، تفقد شركة التأمين الحافز لتسريع الدفع.',
                },
                {
                    icon: '💸',
                    title: 'ضغط الموافقة الجزئية',
                    description: 'غالباً ما توافق شركات التأمين على المطالبات جزئياً، فتبتلع هوامش الربح بهدوء تحت ذريعة "الخدمات غير المبررة".',
                },
                {
                    icon: '🩸',
                    title: 'النزيف الصامت',
                    description: 'الخوف من الرفض يدفع فريق الفوترة إلى تقليل ترميز الإجراءات المعقدة، مما يؤدي إلى فقدان مبالغ كبيرة من الإيرادات المستحقة.',
                },
            ],
            
            // How It Works
            howTitle: 'كيف يعمل',
            howSubtitle: 'ابدأ في دقائق مع عملية بسيطة وبديهية',
            
            howSteps: [
                {
                    number: '01',
                    title: 'التسجيل في ثوانٍ',
                    description: 'أنشئ حسابك برسالة بريد إلكتروني فقط. لا توجد بطاقة ائتمان مطلوبة للفترة التجريبية لمدة 14 يوماً.',
                },
                {
                    number: '02',
                    title: 'تخصيص مساحة العمل الخاصة بك',
                    description: 'أنشئ فريقك وعرّف التفضيلات وادمج أدواتك المفضلة بسهولة.',
                },
            ],
            
            // Testimonials
            testimonialsTitle: 'موثوق من قبل الفرق حول العالم',
            testimonialsSubtitle: 'اقرأ ما يقوله عملاؤنا عن تجربتهم',
            
            testimonials: [
                {
                    variant: 'integration',
                    quote: 'الوصول السريع: ابدأ فوراً عبر تزويدنا بحساب مستخدم مخصص على نظام HIS الحالي لديك. دون أي عبء تقني على فريق تقنية المعلومات لديك.',
                    author: 'Option 1',
                    role: 'الوصول السريع',
                    avatar: '⚡',
                },
                {
                    variant: 'integration',
                    quote: 'تكامل API: مزامنة آلية بالكامل وفي الوقت الفعلي بين نظام HIS لدينا ومحركنا لعملية تدقيق خالية تماماً من الجهد وتصل مباشرة إلى NPHIES.',
                    author: 'Option 2',
                    role: 'الأتمتة الكاملة',
                    avatar: '🔗',
                },
                {
                    variant: 'security',
                    quote: 'بنية تحتية مستضافة بالكامل في السعودية تضمن عدم مغادرة بيانات مرضاك للمملكة. تشفير بمستوى البنوك مع سيادة كاملة على البيانات.',
                    author: 'Security First',
                    role: 'استضافة محلية للبيانات',
                    avatar: '🔒',
                },
            ],
            
            // CTA Section
            ctaFinal: 'هل أنت مستعد لتحويل عملك؟',
            ctaFinalSubtitle: 'انضم إلى آلاف الفرق التي تستخدم SAAEB بالفعل لتسريع نموها.',
            ctaButton: 'ابدأ فترتك التجريبية المجانية',
        },

        // Features Page
        features: {
            title: 'ميزات قوية',
            subtitle: 'كل ما تحتاجه للنجاح',
            description: 'مجموعتنا الشاملة من الميزات مصممة لمساعدتك على العمل بذكاء وسرعة.',
            features: [
                {
                    title: 'التعاون في الوقت الفعلي',
                    description: 'العمل معاً بسلاسة مع التحديثات الفورية والإخطارات الفوري.',
                },
                {
                    title: 'أمان متقدم',
                    description: 'أمان على مستوى المؤسسة مع التشفير من طرف إلى طرف وشهادات الامتثال.',
                },
                {
                    title: 'تحليلات قوية',
                    description: 'احصل على رؤى حول بيانات باستخدام تحليلات قوية وأدوات تقارير.',
                },
                {
                    title: 'تكامل API',
                    description: 'التكامل مع 100+ أداة وخدمة من خلال API الشامل.',
                },
            ],
        },

        // Pricing Page
        pricing: {
            title: 'تسعير بسيط وشفاف',
            subtitle: 'اختر الخطة المناسبة لك',
            description: 'بدون رسوم مخفية، بدون تكاليف مفاجئة. يمكنك التوسع أو التقليل في أي وقت.',
            popular: 'مميزة',
            plans: [
                {
                    name: 'المبتدئ',
                    price: '29$',
                    period: '/شهر',
                    description: 'مثالي للأفراد والفرق الصغيرة',
                    features: [
                        'حتى 5 أعضاء فريق',
                        'تحليلات أساسية',
                        'دعم عبر البريد الإلكتروني',
                        'الميزات الأساسية',
                    ],
                },
                {
                    name: 'احترافي',
                    price: '99$',
                    period: '/شهر',
                    description: 'للفرق النامية',
                    features: [
                        'حتى 50 عضو فريق',
                        'تحليلات متقدمة',
                        'دعم الأولوية',
                        'جميع ميزات المبتدئ',
                        'التكاملات المخصصة',
                    ],
                    popular: true,
                },
                {
                    name: 'مؤسسي',
                    price: 'مخصص',
                    period: 'التسعير',
                    description: 'للمنظمات الكبيرة',
                    features: [
                        'عدد غير محدود من أعضاء الفريق',
                        'تحليلات مخصصة',
                        'دعم مخصص',
                        'جميع ميزات الاحترافي',
                        'نشر مخصص',
                    ],
                },
            ],
            cta: 'ابدأ فترتك التجريبية المجانية',
        },

        // Auth Pages
        auth: {
            login: {
                title: 'أهلا بعودتك',
                subtitle: 'قم بتسجيل الدخول إلى حسابك',
                email: 'البريد الإلكتروني',
                password: 'كلمة المرور',
                rememberMe: 'تذكرني',
                forgotPassword: 'هل نسيت كلمة المرور؟',
                button: 'دخول',
                signingIn: 'جارٍ تسجيل الدخول...',
                noAccount: 'ليس لديك حساب؟',
                signupLink: 'قم بالتسجيل مجاناً',
            },
            signup: {
                title: 'إنشاء حسابك',
                subtitle: 'انضم إلى آلاف الفرق التي تستخدم SAAEB',
                name: 'الاسم الكامل',
                email: 'البريد الإلكتروني',
                password: 'كلمة المرور',
                confirmPassword: 'تأكيد كلمة المرور',
                agreeToTerms: 'أوافق على',
                termsOfService: 'شروط الخدمة',
                button: 'إنشاء حساب',
                creating: 'جارٍ إنشاء الحساب...',
                alreadyHaveAccount: 'هل لديك حساب بالفعل؟',
                loginLink: 'تسجيل الدخول',
            },
        },

        // Dashboard
        dashboard: {
            title: 'لوحة التحكم',
            welcome: 'مرحبا بك في لوحة التحكم الخاصة بك',
            overview: 'نظرة عامة',
            analytics: 'التحليلات',
            settings: 'الإعدادات',
            profile: 'الملف الشخصي',
            projects: 'المشاريع',
            tasks: 'المهام',
            stats: {
                totalUsers: 'إجمالي المستخدمين',
                activeProjects: 'المشاريع النشطة',
                revenue: 'الإيرادات',
                pendingTasks: 'المهام المعلقة',
            },
            charts: {
                revenueGrowth: 'الإيرادات ونمو المستخدمين',
                projectsByCategory: 'المشاريع حسب الفئة',
                taskDistribution: 'توزيع المهام',
                revenue: 'الإيرادات ($)',
                users: 'المستخدمون',
                completed: 'مكتملة',
                inProgress: 'قيد التنفيذ',
            },
            recentActivity: 'النشاط الأخير',
            recentProjectActivities: 'أنشطة المشروع الأخيرة',
        },

        // Common
        common: {
            loading: 'جارٍ التحميل...',
            error: 'خطأ',
            success: 'نجح',
            cancel: 'إلغاء',
            save: 'حفظ',
            delete: 'حذف',
            edit: 'تحرير',
            back: 'رجوع',
            logOut: 'تسجيل الخروج',
            or: 'أو',
            passwordStrength: {
                weak: 'ضعيفة',
                medium: 'متوسطة',
                strong: 'قوية',
            },
        },
    },
};
