import type { FRDData } from "../types/frd";

export const mockFrdData: FRDData = {
  metadata: {
    title: "وثيقة المتطلبات الوظيفية",
    domain: "إدارة حجوزات السفر والتذاكر",
    projectName: "نظام تسهيل لإدارة حجوزات التذاكر",
    author: "أسامة الفاتكي",
  },
  tableOfContents: [
    "1. المقدمة",
    "2. نظرة عامة",
    "3. المتطلبات الوظيفية",
    "4. المتطلبات غير الوظيفية",
    "5. حالات الاستخدام",
    "6. مخطط تدفق العمل",
    "7. قاموس البيانات",
    "8. قواعد العمل",
    "9. مصفوفة التتبع",
    "10. الافتراضات",
    "11. الاعتماديات",
    "12. الاعتماد والتوقيعات",
  ],
  introduction: {
    overview:
      "تهدف هذه الوثيقة إلى تحديد وتوثيق كافة المتطلبات الوظيفية وغير الوظيفية لنظام إدارة حجوزات التذاكر والسفر، بهدف توجيه فريق التطوير والتأكد من أن النظام يلبي جميع الاحتياجات التشغيلية والعملية.",
    coreModulesIntro: "يغطي هذا المستند الوحدات البرمجية الأساسية التالية:",
    coreModules: [
      "إدارة المستخدمين والصلاحيات",
      "إدارة الشركات الناقلة",
      "إدارة المسافرين (العملاء)",
      "إدارة الوكلاء",
      "إصدار التذاكر ومعالجة العمليات المالية",
    ],
    supportingModulesNote:
      "كما تتضمن وحدات مساندة تشمل: إعدادات الخطوط والتسعير، سجل التدقيق (Audit Log)، والتقارير المالية والتشغيلية.",
    outOfScope:
      "لا يشمل هذا المستند عمليات التخطيط التشغيلي اليومي للرحلات أو إدارة أسطول المركبات.",
    goals: [
      "توحيد إدارة حجوزات التذاكر والحسابات المالية في منصة مركزية واحدة",
      "أتمتة العمليات المالية (الأرصدة، المستحقات، المرتجعات) لتقليل الأخطاء اليدوية",
      "توفير تقارير تشغيلية ومالية لحظية لدعم اتخاذ القرار",
      "ضمان أمن البيانات وتتبع جميع العمليات عبر سجل تدقيق شامل",
    ],
    targetAudience:
      "مهندسو البرمجيات، مديرو المشاريع، فريق ضمان الجودة (QA)، أصحاب المصلحة التنفيذيون",
    references:
      "IEEE 830 — المواصفات الموصى بها لمتطلبات البرمجيات | ISO/IEC 25010 — معيار جودة البرمجيات",
  },
  projectBackground:
    "تعتمد المؤسسة حالياً على عمليات يدوية وأنظمة منفصلة لإدارة حجوزات تذاكر السفر وتتبع الحسابات المالية للشركات الناقلة والوكلاء والمسافرين. يؤدي هذا النهج إلى تباين البيانات، صعوبة تتبع المستحقات المالية، وتأخر إصدار التقارير. يهدف هذا المشروع إلى بناء نظام متكامل يوحّد جميع العمليات التشغيلية والمالية في منصة واحدة.",
  projectDescription: {
    overview:
      "نظام تسهيل هو منصة متكاملة لإدارة حجوزات تذاكر السفر والعمليات المالية المرتبطة بها، مصمم لتبسيط وأتمتة سير العمل اليومي لوكالات السفر.",
    features: [
      "إدارة شاملة للمستخدمين بنظام صلاحيات متعدد المستويات (RBAC)",
      "إدارة الشركات الناقلة مع تتبع سقوف الحسابات والخطوط",
      "تسجيل المسافرين وتتبع حساباتهم المالية (نقدي / آجل)",
      "إدارة الوكلاء وتتبع مديونياتهم وسقوف حساباتهم",
      "إصدار تذاكر السفر مع احتساب آلي للتسعير والخصومات",
      "معالجة التسديدات والمرتجعات مع تحديث تلقائي للأرصدة",
      "لوحة تقارير مالية وتشغيلية متقدمة",
      "سجل تدقيق شامل لجميع العمليات (Audit Trail)",
    ],
  },
  functionalRequirements: [
    {
      id: "FR-01",
      description:
        "إدارة المستخدمين: تسجيل الدخول للنظام والتحقق من بيانات الاعتماد وحالة تفعيل الحساب.",
      priority: "عالية",
      userRole: "جميع المستخدمين",
      acceptanceCriteria:
        "تسجيل الدخول بنجاح والتوجيه للرئيسية عند صحة البيانات، وإظهار رسالة خطأ عند الخطأ أو تعطيل الحساب.",
    },
    {
      id: "FR-02",
      description:
        "إدارة المستخدمين: إنشاء حساب مستخدم جديد وتحديد أدوار الصلاحيات (Admin / User) وكلمة المرور.",
      priority: "عالية",
      userRole: "أدمن (Admin)",
      acceptanceCriteria:
        "إنشاء الحساب بنجاح مع التحقق من عدم تكرار اسم المستخدم، وتطابق كلمة المرور (أكثر من 6 أحرف)، واختيار الدور.",
    },
    {
      id: "FR-03",
      description:
        "إدارة المستخدمين: تعديل بيانات المستخدمين القائمين وتحديث أدوارهم وحالة الحساب (نشط / غير نشط).",
      priority: "متوسطة",
      userRole: "أدمن (Admin)",
      acceptanceCriteria:
        "تحديث البيانات بنجاح، والرفض القطعي لإلغاء تنشيط آخر حساب مدير نظام (Admin) في النظام.",
    },
    {
      id: "FR-04",
      description:
        "إدارة المستخدمين: عرض قائمة المستخدمين، البحث عنهم، وعرض بيانات الملف الشخصي.",
      priority: "متوسطة",
      userRole: "جميع المستخدمين / أدمن",
      acceptanceCriteria:
        "عرض اسم المستخدم والدور والحالة مع إخفاء كلمة المرور تماماً لأغراض أمنية، وإتاحة البحث والفلترة للـ Admin.",
    },
    {
      id: "FR-05",
      description:
        "إدارة الشركات: إضافة وتعديل بيانات الشركات الناقلة وتحديد سقوف الحسابات والخطوط المتعاقد عليها (من - إلى).",
      priority: "عالية",
      userRole: "مستخدم / أدمن",
      acceptanceCriteria:
        "حفظ بيانات الشركة وسقف حسابها وخطوطها بنجاح، ومنع تكرار اسم الشركة.",
    },
    {
      id: "FR-06",
      description:
        "إدارة المسافرين: إضافة وتعديل بيانات المسافرين (الاسم الرباعي، رقم الجواز، الميلاد، الجنس، نوع الحساب، وتتبع الأرصدة).",
      priority: "عالية",
      userRole: "مستخدم / أدمن",
      acceptanceCriteria:
        "تسجيل البيانات بنجاح، التحقق من فرادية رقم الجواز وإلزامية الاسم الرباعي، وتتبع الحساب (نقدي / آجل).",
    },
    {
      id: "FR-07",
      description:
        "إدارة الوكلاء: إضافة ومتابعة بيانات الوكلاء وتتبع أرصدتهم المالية (مدين / دائن) وسقف الحساب المعتمد.",
      priority: "عالية",
      userRole: "مستخدم / أدمن",
      acceptanceCriteria:
        "تسجيل الوكيل وسقف حسابه المالي بنجاح، ومتابعة المستحقات المالية له وعليه دون تجاوز السقف.",
    },
    {
      id: "FR-08",
      description:
        "إدارة التذاكر: إصدار تذاكر السفر (مباشر / عبر وكيل) واحتساب التكلفة آلياً وتحديث الأرصدة المالية.",
      priority: "عالية",
      userRole: "مستخدم / أدمن",
      acceptanceCriteria:
        "توليد رقم تذكرة فريد، جلب التسعيرة تلقائياً، وتحديث رصيد الشركة (التزام عليّ) ورصيد المستخدم/الوكيل (حق لي).",
    },
    {
      id: "FR-09",
      description:
        "إدارة التذاكر: معالجة تسديد قيمة التذاكر، وإدارة حالات المرتجعات والترحيل.",
      priority: "عالية",
      userRole: "مستخدم / أدمن",
      acceptanceCriteria:
        "السماح بالتسديد للتذاكر الجاهزة وغير المرحلة والتي لم ينتهِ تاريخ رحلتها، ومنع المرتجع للتذاكر المرحلة أو المنتهية.",
    },
    {
      id: "FR-S01",
      description:
        "وحدة مساندة (الإعدادات): إدارة الخطوط، التسعيرات، وتحديد الخصومات المسموح بها لكل شركة ناقلة.",
      priority: "عالية",
      userRole: "أدمن (Admin)",
      acceptanceCriteria:
        "إضافة وتحديث خطوط السير وقواعد التسعير والحد الأقصى للخصومات بنجاح.",
    },
    {
      id: "FR-S02",
      description:
        "وحدة مساندة (الإعدادات): تسجيل حركات العمليات (Audit Log) لتتبع أفعال المستخدمين على النظام.",
      priority: "متوسطة",
      userRole: "أدمن (Admin)",
      acceptanceCriteria:
        "تسجيل أوتوماتيكي دقيق لكل حركة إضافة، تعديل، تسديد، أو إلغاء متضمنة اسم المستخدم والتاريخ والوقت.",
    },
    {
      id: "FR-S03",
      description:
        "وحدة مساندة (التقارير): توليد تقارير المبيعات والأرباح الإجمالية والتفصيلية وفق نطاق زمني محدد.",
      priority: "عالية",
      userRole: "أدمن / مستخدم مخول",
      acceptanceCriteria:
        "عرض تفاصيل العمليات، الخصومات، المدفوعات، المتبقي، وصافي الربح بدقة مع إمكانية التصفية حسب التاريخ.",
    },
    {
      id: "FR-S04",
      description:
        "وحدة مساندة (التقارير): توليد كشوفات الحسابات المالية للمسافرين، الوكلاء، والشركات.",
      priority: "متوسطة",
      userRole: "أدمن / مستخدم مخول",
      acceptanceCriteria:
        "عرض تفاصيل الحركات (له / عليه)، التاريخ، نوع الحركة، ملخص الأرصدة النهائية حسب العملة.",
    },
  ],
  nonFunctionalRequirements: [
    {
      id: "NFR-P01",
      category: "الأداء (Performance)",
      description:
        "زمن استجابة النظام عند إصدار التذاكر وتحديث الأرصدة المالية لا يتجاوز ثانيتين.",
      priority: "عالية",
      verificationMethod: "اختبار الأداء (Load Testing)",
      acceptanceCriteria: "الاستجابة أقل من 2 ثانية لـ 95% من الطلبات",
      dependencies: "خادم التطبيق وخادم قواعد البيانات",
    },
    {
      id: "NFR-P02",
      category: "القابلية للتوسع (Scalability)",
      description:
        "قدرة النظام على معالجة النمو في بيانات التذاكر والعمليات المالية مع دعم التزامن.",
      priority: "عالية",
      verificationMethod: "اختبار الضغط (Stress Testing)",
      acceptanceCriteria:
        "دعم حتى 50 مستخدم متزامن ومعالجة 100,000 سجل دون تراجع الأداء",
      dependencies: "البنية التحتية وقواعد البيانات",
    },
    {
      id: "NFR-S01",
      category: "الأمان (Security)",
      description:
        "تطبيق التحكم بالوصول القائم على الأدوار (RBAC)، وتشفير كلمات المرور وحجبها في العرض.",
      priority: "عالية",
      verificationMethod: "اختبار الاختراق والتدقيق البرمجي",
      acceptanceCriteria:
        "منع الوصول لغير المصرح لهم وحجب كلمات المرور من جميع الواجهات والتعديلات",
      dependencies: "وحدة إدارة الصلاحيات",
    },
    {
      id: "NFR-S02",
      category: "الامتثال (Compliance)",
      description:
        "حفظ وتشفير البيانات المالية وتتبع الحركات آلياً لمنع التلاعب (Audit Trail).",
      priority: "عالية",
      verificationMethod: "تدقيق أمني وسجلات النظام",
      acceptanceCriteria:
        "تسجيل 100% من الحركات المالية وتشفير الاتصالات عبر HTTPS/TLS",
      dependencies: "سجل التدقيق (Audit Log)",
    },
    {
      id: "NFR-R01",
      category: "الاعتمادية (Reliability)",
      description:
        "جاهزية النظام للعمل بشكل مستمر دون انقطاع خلال ساعات العمل الرسمية.",
      priority: "عالية",
      verificationMethod: "مراقبة التوفر (Uptime Monitoring)",
      acceptanceCriteria: "نسبة توافر الخدمة (SLA) لا تقل عن 99.5%",
      dependencies: "بيئة الاستضافة والشبكة",
    },
    {
      id: "NFR-R02",
      category: "التعافي من الكوارث",
      description:
        "وجود آلية نسخ احتياطي للبيانات المالية وتحديد المؤشرات الزمنية للاستعادة.",
      priority: "متوسطة",
      verificationMethod: "محاكاة استعادة البيانات (Disaster Recovery Test)",
      acceptanceCriteria: "مؤشر RPO < 1 ساعة، ومؤشر RTO < 4 ساعات",
      dependencies: "وحدات التخزين السحابية/الخارجية",
    },
  ],
  useCases: [
    {
      id: "UC-01",
      title: "تسجيل الدخول إلى النظام",
      primaryActor: "جميع المستخدمين (User / Admin)",
      goal: "تسجيل الدخول الآمن للنظام للوصول للوظائف بحسب الصلاحيات الممنوحة",
      preconditions: "وجود حساب للمستخدم في النظام وأن تكون حالته نشط",
      trigger: "فتح صفحة تسجيل الدخول وإدخال البيانات",
      mainFlow: [
        "يدخل المستخدم اسم المستخدم وكلمة المرور.",
        "يضغط على زر تسجيل الدخول.",
        "يتحقق النظام من صحة البيانات وتفعيل الحساب.",
        "يتم توجيه المستخدم بنجاح إلى الواجهة الرئيسية للنظام.",
      ],
      alternativeFlow:
        "عند إدخال بيانات خاطئة أو حساب غير نشط، يرفض النظام الدخول ويظهر رسالة خطأ مخصصة.",
      postconditions: "فتح جلسة عمل آمنة وتحديد صلاحيات الشاشة للمستخدم.",
      relatedRequirement: "FR-01",
      relatedData: "اسم المستخدم، كلمة المرور، حالة الحساب.",
    },
    {
      id: "UC-02",
      title: "إضافة مستخدم جديد",
      primaryActor: "أدمن (Admin)",
      goal: "إنشاء حساب جديد لموظف وتعيين دور صلاحياته",
      preconditions: "تسجيل دخول الأدمن بنجاح",
      trigger: "النقر على زر إضافة مستخدم من شاشة إدارة المستخدمين",
      mainFlow: [
        "يدخل الأدمن: اسم المستخدم، كلمة المرور، تأكيد كلمة المرور، الدور (Admin/User)، والحالة.",
        "يضغط على حفظ.",
        "يتحقق النظام من عدم تكرار الاسم وتطابق كلمتي المرور وطولهما (6 أحرف فأكثر).",
        "يتم حفظ بيانات المستخدم وتفعيل حسابه.",
      ],
      alternativeFlow:
        "إذا كان اسم المستخدم مكرراً أو كلمات المرور غير متطابقة، يعرض النظام تنبيهاً ويرفض الإضافة.",
      postconditions:
        "إدراج الحساب الجديد في قائمة المستخدمين وإمكانية تسجيل دخوله.",
      relatedRequirement: "FR-02",
      relatedData:
        "اسم المستخدم، كلمة المرور، تأكيد كلمة المرور، الدور، الحالة.",
    },
    {
      id: "UC-03",
      title: "إضافة مسافر (عميل) جديد",
      primaryActor: "مستخدم / أدمن",
      goal: "إدخال بيانات مسافر جديد في قاعدة البيانات للتمكن من إصدار التذاكر له",
      preconditions: "الدخول إلى وحدة إدارة المسافرين",
      trigger: "النقر على زر إضافة مسافر جديد",
      mainFlow: [
        "إدخال البيانات الإلزامية (الاسم الرباعي، رقم الجواز) والبيانات الاختيارية (الميلاد، الجنس، الهاتف، الصورة).",
        "تحديد نوع الحساب (نقدي / آجل) والحالة.",
        "يتحقق النظام من أن رقم الجواز فريد وغير مكرر.",
        "يتم حفظ المسافر وفتح كشف حساب مالي له.",
      ],
      alternativeFlow:
        "في حال أدخل رقم جواز موجود مسبقاً، تظهر رسالة خطأ تمنع التكرار.",
      postconditions: "إتاحة المسافر ضمن قائمة الاختيار عند إصدار التذاكر.",
      relatedRequirement: "FR-06",
      relatedData:
        "الاسم الرباعي، رقم الجواز، تاريخ الميلاد، الجنس، نوع الحساب، صورة الهوية.",
    },
    {
      id: "UC-04",
      title: "إصدار تذكرة سفر جديدة",
      primaryActor: "مستخدم / أدمن",
      goal: "تسجيل حجز وتمرير عملية مبيعات تذكرة وتحديث الأرصدة المالية تلقائياً",
      preconditions: "تعريف المسافر، والشركة، والخط، والتسعيرة مسبقاً بالنظام",
      trigger: "اختيار إصدار تذكرة من شاشة التذاكر",
      mainFlow: [
        "تحديد المسافر والشركة والوجهة (من - إلى) ونوع التسجيل (مباشر / عبر وكيل).",
        "يجلب النظام سعر التذكرة تلقائياً من الإعدادات بناءً على الشركة والخط.",
        "إدخال بيانات الرحلة (تاريخ السفر، وقت الحضور، المبادرة، الخصم، والمدفوع).",
        "ضغط حفظ وتأكيد الإصدار.",
        "يولّد النظام رقم فريد للتذكرة، ويزيد رصيد الشركة (التزام)، ويرحل المستحق على الوكيل/المستخدم.",
      ],
      alternativeFlow:
        "عدم اكتمال البيانات الإلزامية أو تجاوز سقف حساب الوكيل يمنع إتمام الإصدار ويظهر تنبيهاً.",
      postconditions:
        "تغيير حالة التذكرة، وتوليد رقم التذكرة، وتحديث الحسابات المالية آلياً.",
      relatedRequirement: "FR-08",
      relatedData:
        "المسافر، الشركة، الوجهة، السعر، الخصم، المدفوع، نوع التأشيرة، التواريخ.",
    },
    {
      id: "UC-05",
      title: "إجراء مرتجع لتذكرة سفر",
      primaryActor: "مستخدم / أدمن",
      goal: "استرجاع قيمة تذكرة وإلغاء حجزها مع معالجة التأثيرات المالية",
      preconditions:
        "وجود تذكرة سابقة بالشروط (غير مرحلة، لم ينتهِ تاريخ الرحلة، وجاهزة)",
      trigger: "اختيار تذكرة محددة والضغط على طلب مرتجع",
      mainFlow: [
        "البحث عن التذكرة برقمها.",
        "يفحص النظام قيود المرتجع (التأكد من عدم الترحيل وعدم انتهاء الرحلة).",
        "تأكيد عملية الإرجاع.",
        "تحويل حالة التذكرة إلى ملغية/مرتجع وتسوية الأرصدة المالية المرتبطة بالشركة والعميل.",
      ],
      alternativeFlow:
        "إذا كانت التذكرة مرحلة أو انتهى تاريخ سفرها، يرفض النظام الإرجاع ويعرض سبب الرفض.",
      postconditions: "إلغاء التذكرة وإعادة ضبط القيود المالية المحسوبة عليها.",
      relatedRequirement: "FR-09",
      relatedData:
        "رقم التذكرة، حالة التذكرة، تاريخ السفر، القيود المالية المترتبة.",
    },
    {
      id: "UC-06",
      title: "توليد واستخراج التقارير المالية والتشغيلية",
      primaryActor: "أدمن / مستخدم مخول",
      goal: "عرض وتحليل المبيعات، كشوفات الحسابات، والأرباح لدعم اتخاذ القرار",
      preconditions: "وجود عمليات تذاكر وحركات مالية مسجلة بالنظام",
      trigger:
        "اختيار نوع التقرير وتحديد الفترة الزمنية (من تاريخ - إلى تاريخ)",
      mainFlow: [
        "تحديد نوع التقرير (مبيعات / كشف حساب وكيل / كشف مسافرين / أرباح).",
        "إدخال الفلترة المحددة (التواريخ، العميل، أو الشركة).",
        "الضغط على عرض التقرير.",
        "يعرض النظام السجلات التفصيلية والمجاميع الإجمالية (إجمالي المدفوع، المتبقي، وصافي الربح).",
      ],
      alternativeFlow:
        "في حال عدم وجود عمليات ضمن النطاق المختار، يتم إظهار رسالة لا توجد سجلات مطابقة.",
      postconditions: "طباعة التقرير أو تصديره.",
      relatedRequirement: "FR-S03, FR-S04",
      relatedData:
        "النطاق الزمني، المبيعات، الإجمالي، المتبقي، الأرباح، الحركة (له/عليه).",
    },
    {
      id: "UC-07",
      title: "تعديل بيانات وصلاحيات مستخدم",
      primaryActor: "أدمن (Admin)",
      goal: "تحديث بيانات حساب مستخدم قائم، تفعيل/إلغاء تنشيطه، أو تغيير دوره",
      preconditions: "وجود المستخدم المراد تعديله في النظام",
      trigger: "اختيار تعديل من قائمة المستخدمين",
      mainFlow: [
        "تحديد حساب المستخدم المطلوب من القائمة.",
        "تعديل الحقول المسموحة (اسم المستخدم، الدور، كلمة المرور، الحالة).",
        "الضغط على حفظ التعديلات.",
        "يتحقق النظام من القيود المعتمدة ويحدث البيانات.",
      ],
      alternativeFlow:
        "يمنع النظام تماماً إلغاء تنشيط آخر حساب Admin موجود في النظام ويظهر تنبيهاً بذلك.",
      postconditions: "تحديث صلاحيات وحالة الحساب فوراً.",
      relatedRequirement: "FR-03",
      relatedData: "اسم المستخدم، الدور، كلمة المرور، حالة التنشيط.",
    },
    {
      id: "UC-08",
      title: "إضافة شركة ناقلة جديدة",
      primaryActor: "مستخدم / أدمن",
      goal: "تسجيل شركة ناقلة جديدة بالنظام لربط التذاكر والخطوط والحسابات المالية بها",
      preconditions: "الدخول لوحدة إدارة الشركات",
      trigger: "النقر على زر إضافة شركة",
      mainFlow: [
        "إدخال اسم الشركة، رقم الهاتف، سقف الحساب، والخطوط التابعة (من - إلى).",
        "تحديد حالة الشركة.",
        "الضغط على حفظ.",
        "يجري النظام فحص عدم التكرار ويتم حفظ الشركة وفتح كشف حساب مالي لها.",
      ],
      alternativeFlow:
        "إذا كان اسم الشركة مكرراً، يُرفض الطلب ويطلب من المستخدم تعديل الاسم.",
      postconditions: "ظهور الشركة في شاشات تسعير الخطوط وإصدار التذاكر.",
      relatedRequirement: "FR-05",
      relatedData:
        "اسم الشركة، رقم الهاتف، سقف الحساب، حالة الشركة، خطوط السير.",
    },
    {
      id: "UC-09",
      title: "إضافة وكيل ومتابعة حسابه",
      primaryActor: "مستخدم / أدمن",
      goal: "إضافة وكيل مبيعات جديد وتحديد سقف حسابه المالي وتتبع مديونيته",
      preconditions: "الوصول لشاشة إدارة الوكلاء",
      trigger: "النقر على إضافة وكيل",
      mainFlow: [
        "إدخال اسم الوكيل، الهاتف، البريد الإلكتروني، وسقف الحساب المالي.",
        "تحديد الرصيد الافتتاحي (مدين / دائن) والحالة وملاحظات الحساب.",
        "الضغط على حفظ البيانات.",
        "تسجيل الوكيل وإنشاء ملف مالي متكامل له.",
      ],
      alternativeFlow: "إظهار رسالة خطأ عند عدم إدخال حقول الاتصال الإلزامية.",
      postconditions:
        "إتاحة الوكيل في خيارات نوع التسجيل: عبر وكيل عند إصدار التذاكر.",
      relatedRequirement: "FR-07",
      relatedData:
        "اسم الوكيل، الهاتف، البريد، سقف الحساب، مدين، دائن، ملاحظات.",
    },
    {
      id: "UC-10",
      title: "تسديد قيمة تذكرة غير مسددة",
      primaryActor: "مستخدم / أدمن",
      goal: "تحصيل وقيد المبالغ المستحقة على تذكرة صادرة وتحديث الحالة إلى مسددة",
      preconditions:
        "وجود تذكرة بحالة غير مسددة، غير مرحلة، وتاريخ رحلتها لم ينتهِ",
      trigger: "اختيار تسديد من شاشة التذاكر أو من كشف الحساب",
      mainFlow: [
        "استدعاء التذكرة بالرقم أو بالبحث.",
        "يتأكد النظام تلقائياً من صلاحية التذكرة للسداد (غير مرحلة + الرحلة قائمة).",
        "تحديد المبلغ المدفوع ونوع الدفع.",
        "تأكيد عملية السداد.",
        "يتم إقفال المبلغ، تحديث الحسابات المالية، وتغيير حالة التذكرة.",
      ],
      alternativeFlow:
        "إذا كانت التذكرة مرحلة أو انتهى تاريخ سفرها، يرفض النظام عملية السداد ويمنع الإجراء.",
      postconditions:
        "تسوية المستحقات المالية الصادرة وتحديث رصيد العميل/الوكيل.",
      relatedRequirement: "FR-09",
      relatedData:
        "رقم التذكرة، القيمة، المدفوع، المتبقي، تاريخ الرحلة، حالة التذكرة.",
    },
    {
      id: "UC-11",
      title: "إدارة إعدادات الخطوط والخصومات والتسعير",
      primaryActor: "أدمن (Admin)",
      goal: "تعريف خطوط السير الجديدة وتحديد أسعار التذاكر والحد الأقصى للخصومات المسموحة",
      preconditions: "صلاحيات أدمن بالنظام",
      trigger: "الدخول إلى شاشة إعدادات النظام",
      mainFlow: [
        "إضافة أو تعديل خط سفر (من - إلى).",
        "ربطه بالشركة الناقلة وتحديد التسعيرة المعتمدة.",
        "تعيين نسبة الخصم المسموح بها للموظفين.",
        "حفظ الإعدادات.",
      ],
      alternativeFlow:
        "يمنع النظام إدخال قيم تسعير بالسالب أو خصم يتجاوز سعر التذكرة الأساسي.",
      postconditions:
        "اعتماد الأسعار والخصومات الجديدة فوراً عند إصدار أي تذكرة قادمة.",
      relatedRequirement: "FR-S01",
      relatedData: "الخط، الشركة، السعر الافتراضي، الخصم المسموح.",
    },
  ],
  workflowDiagram: {
    title: "مخطط تدفق العمل - دورة إصدار وتحديث حسابات التذكرة",
    startLabel: "البداية: طلب إصدار تذكرة",
    preBranchActions: [
      "إدخال تفاصيل المسافر والرحلة واختيار الشركة/الوكيل",
      "التحقق من البيانات وسقف الحساب المالي",
    ],
    decisionLabel: "هل البيانات صحيحة والحساب ضمن السقف؟",
    successPath: "المسار المعتمد: الحساب ضمن السقف والبيانات صحيحة",
    errorPath: "المسار المرفوض: تجاوز السقف أو خطأ بالبيانات (إيقاف)",
    postBranchActions: [
      "توليد رقم التذكرة واحتساب التسعيرة والخصم",
      "تحديث آلي: إضافة المبلغ لرصيد الشركة وتقييده على المستخدم/الوكيل",
      "حفظ الحركة في سجل التدقيق (Audit Log) وتوليد التذكرة",
    ],
    endLabel: "النهاية",
  },
  dataDictionary: [
    {
      entityName: "المستخدمين",
      fields: [
        {
          name: "User_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد للمستخدم يُنشأ تلقائياً (Primary Key)",
        },
        {
          name: "Username",
          type: "String",
          required: true,
          notes: "اسم المستخدم لتسجيل الدخول (فريد فريد لا يتكرر)",
        },
        {
          name: "Password_Hash",
          type: "String",
          required: true,
          notes: "كلمة المرور مشفرة (لا تقل عن 6 أحرف)",
        },
        {
          name: "Role",
          type: "Enum",
          required: true,
          notes: "دور المستخدم والصلاحية (Admin, User)",
        },
        {
          name: "Is_Active",
          type: "Boolean",
          required: true,
          notes: "حالة الحساب (1: نشط، 0: غير نشط)",
        },
        {
          name: "Created_On",
          type: "DateTime",
          required: true,
          notes: "طابع زمني لوقت إنشاء الحساب من النظام",
        },
        {
          name: "Updated_On",
          type: "DateTime",
          required: false,
          notes: "تاريخ وتوقيت آخر تعديل للبيانات",
        },
      ],
    },
    {
      entityName: "الشركات الناقلة",
      fields: [
        {
          name: "Company_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد للشركة (Primary Key)",
        },
        {
          name: "Company_Name",
          type: "String",
          required: true,
          notes: "اسم الشركة الناقلة (فريد لا يتكرر)",
        },
        {
          name: "Phone_Number",
          type: "String",
          required: false,
          notes: "رقم هاتف التواصل للشركة",
        },
        {
          name: "Credit_Limit",
          type: "Decimal",
          required: true,
          notes: "سقف الحساب المالي المسموح للشركة",
        },
        {
          name: "Status",
          type: "Enum",
          required: true,
          notes: "حالة الشركة (نشط، غير نشط)",
        },
        {
          name: "Created_On",
          type: "DateTime",
          required: true,
          notes: "تاريخ إضافة الشركة للنظام",
        },
      ],
    },
    {
      entityName: "المسافرين والعملاء",
      fields: [
        {
          name: "Passenger_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد للمسافر (Primary Key)",
        },
        {
          name: "Full_Name",
          type: "String",
          required: true,
          notes: "الاسم الرباعي الكامل للمسافر",
        },
        {
          name: "Passport_Number",
          type: "String",
          required: true,
          notes: "رقم جواز السفر (فريد لا يتكرر)",
        },
        {
          name: "Birth_Date",
          type: "Date",
          required: true,
          notes: "تاريخ ميلاد المسافر",
        },
        {
          name: "Gender",
          type: "Enum",
          required: true,
          notes: "الجنس (ذكر، أنثى)",
        },
        {
          name: "Phone_Number",
          type: "String",
          required: false,
          notes: "رقم هاتف المسافر للتواصل",
        },
        {
          name: "ID_Card_Image",
          type: "String",
          required: false,
          notes: "مسار أو رابط صورة الهوية/الجواز",
        },
        {
          name: "Account_Type",
          type: "Enum",
          required: true,
          notes: "نوع الحساب (نقدي، آجل)",
        },
        {
          name: "Balance_Due",
          type: "Decimal",
          required: false,
          notes: "الرصيد المالي المترتب (عليه) - الافتراضي 0",
        },
        {
          name: "Balance_Claim",
          type: "Decimal",
          required: false,
          notes: "الرصيد المالي المتاح (له) - الافتراضي 0",
        },
        {
          name: "Status",
          type: "Enum",
          required: true,
          notes: "حالة المسافر (نشط، ملغي)",
        },
        {
          name: "Created_On",
          type: "DateTime",
          required: true,
          notes: "طابع زمني لتاريخ التسجيل",
        },
      ],
    },
    {
      entityName: "الوكلاء",
      fields: [
        {
          name: "Agent_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد للوكيل (Primary Key)",
        },
        {
          name: "Agent_Name",
          type: "String",
          required: true,
          notes: "اسم الوكيل أو المكتب الوكيل",
        },
        {
          name: "Phone_Number",
          type: "String",
          required: true,
          notes: "رقم هاتف التواصل للوكيل",
        },
        {
          name: "Email",
          type: "String",
          required: false,
          notes: "البريد الإلكتروني للوكيل",
        },
        {
          name: "Debit_Balance",
          type: "Decimal",
          required: false,
          notes: "المبلغ المدين للوكيل (عليه)",
        },
        {
          name: "Credit_Balance",
          type: "Decimal",
          required: false,
          notes: "المبلغ الدائن للوكيل (له)",
        },
        {
          name: "Credit_Limit",
          type: "Decimal",
          required: true,
          notes: "سقف الحساب المالي المسموح للوكيل",
        },
        {
          name: "Status",
          type: "Enum",
          required: true,
          notes: "حالة الوكيل (نشط، غير نشط)",
        },
        {
          name: "Notes",
          type: "Text",
          required: false,
          notes: "ملاحظات إضافية حول الوكيل",
        },
        {
          name: "Created_On",
          type: "DateTime",
          required: true,
          notes: "تاريخ إدخال بيانات الوكيل",
        },
      ],
    },
    {
      entityName: "الخطوط والأسعار",
      fields: [
        {
          name: "Route_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد للخط (Primary Key)",
        },
        {
          name: "Company_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف الشركة المشغلة للخط (Foreign Key)",
        },
        {
          name: "Origin",
          type: "String",
          required: true,
          notes: "محطة الانطلاق (من)",
        },
        {
          name: "Destination",
          type: "String",
          required: true,
          notes: "وجهة الوصول (إلى)",
        },
        {
          name: "Default_Price",
          type: "Decimal",
          required: true,
          notes: "السعر الافتراضي للتذكرة حسب الخط والشركة",
        },
        {
          name: "Max_Discount",
          type: "Decimal",
          required: false,
          notes: "الحد الأقصى للخصم المسموح للخط",
        },
      ],
    },
    {
      entityName: "التذاكر",
      fields: [
        {
          name: "Ticket_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد ورقم التذكرة التلقائي (Primary Key)",
        },
        {
          name: "Passenger_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف المسافر المرتبط بالتذكرة (Foreign Key)",
        },
        {
          name: "Company_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف الشركة الناقلة (Foreign Key)",
        },
        {
          name: "Route_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف الخط (من — إلى) (Foreign Key)",
        },
        {
          name: "Registration_Type",
          type: "Enum",
          required: true,
          notes: "نوع التسجيل (مباشر، عبر وكيل)",
        },
        {
          name: "Agent_ID",
          type: "String",
          required: false,
          notes: "مُعرِّف الوكيل في حال كان التسجيل عبر وكيل (Foreign Key)",
        },
        {
          name: "Price",
          type: "Decimal",
          required: true,
          notes: "القيمة الكلية للتذكرة",
        },
        {
          name: "Paid_Amount",
          type: "Decimal",
          required: true,
          notes: "المبلغ المدفوع فعلًا",
        },
        {
          name: "Discount",
          type: "Decimal",
          required: false,
          notes: "قيمة الخصم المطبق (الافتراضي 0)",
        },
        {
          name: "Currency",
          type: "String",
          required: true,
          notes: "العملة المستخدمة (مثال: YER, SAR, USD)",
        },
        {
          name: "Issue_Date",
          type: "Date",
          required: true,
          notes: "تاريخ إصدار التذكرة",
        },
        {
          name: "Travel_Date",
          type: "Date",
          required: true,
          notes: "تاريخ الرحلة / السفر",
        },
        {
          name: "Arrival_Time",
          type: "Time",
          required: false,
          notes: "وقت حضور المسافر للمحطة",
        },
        {
          name: "Departure_Time",
          type: "Time",
          required: false,
          notes: "وقت مغادرة الرحلة",
        },
        {
          name: "Visa_Type",
          type: "String",
          required: false,
          notes: "نوع التأشيرة (عمل، زيارة، ترانزيت... إلخ)",
        },
        {
          name: "User_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف المستخدم الذي أصدر التذكرة (Foreign Key)",
        },
        {
          name: "Status",
          type: "Enum",
          required: true,
          notes: "حالة التذكرة (طلب، غير مسددة، مرحلة، محفوظ، ملغية)",
        },
        {
          name: "Notes",
          type: "Text",
          required: false,
          notes: "ملاحظات إضافية حول التذكرة",
        },
        {
          name: "Created_On",
          type: "DateTime",
          required: true,
          notes: "طابع زمني وقت إنشاء السجل في النظام",
        },
      ],
    },
    {
      entityName: "الحركات المالية",
      fields: [
        {
          name: "Transaction_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد للحركة المالية (Primary Key)",
        },
        {
          name: "Entity_Type",
          type: "Enum",
          required: true,
          notes: "جهة الحركة (مسافر، وكيل، شركة، مستخدم)",
        },
        {
          name: "Entity_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف الجهة المربوطة بالحركة",
        },
        {
          name: "Ticket_ID",
          type: "String",
          required: false,
          notes: "رقم التذكرة المرتبطة بالعملية (إن وجدت) (Foreign Key)",
        },
        {
          name: "Transaction_Type",
          type: "Enum",
          required: true,
          notes: "نوع الحركة (إصدار، تسديد، مرتجع، ترحيل)",
        },
        {
          name: "Credit",
          type: "Decimal",
          required: true,
          notes: "مبلغ له (الافتراضي 0)",
        },
        {
          name: "Debit",
          type: "Decimal",
          required: true,
          notes: "مبلغ عليه (الافتراضي 0)",
        },
        {
          name: "Currency",
          type: "String",
          required: true,
          notes: "العملة الخاصة بالحركة المالية",
        },
        {
          name: "Description",
          type: "Text",
          required: true,
          notes: "البيان أو الشرح التفصيلي للحركة",
        },
        {
          name: "User_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف المستخدم المنفذ للحركة المالية (Foreign Key)",
        },
        {
          name: "Transaction_Date",
          type: "DateTime",
          required: true,
          notes: "طابع زمني لتاريخ ووقت تنفيذ الحركة",
        },
      ],
    },
    {
      entityName: "سجل تتبع العمليات",
      fields: [
        {
          name: "Log_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف فريد لسجل التتبع (Primary Key)",
        },
        {
          name: "User_ID",
          type: "String",
          required: true,
          notes: "مُعرِّف المستخدم القائم بالعملية (Foreign Key)",
        },
        {
          name: "Action",
          type: "String",
          required: true,
          notes: "نوع الحركة (إضافة، تعديل، حذف، تغيير كلمة مرور...)",
        },
        {
          name: "Description",
          type: "Text",
          required: true,
          notes: "تفاصيل العملية والأثر الناتج عنها في النظام",
        },
        {
          name: "Created_On",
          type: "DateTime",
          required: true,
          notes: "طابع زمني دقيق لوقت حدوث العملية",
        },
      ],
    },
  ],
  businessRules: [
    {
      moduleName: "وحدة إدارة المستخدمين والصلاحيات (User Management)",
      rules: [
        {
          id: "BR-UM-01",
          description:
            "يلتزم النظام بالتحقق من فرادية اسم المستخدم، ولا يُسمح بتكرار اسم المستخدم لنفس الحساب.",
        },
        {
          id: "BR-UM-02",
          description:
            'يجب ألا تقل كلمة المرور عن 6 أحرف، ويُشترط تطابقها التام مع حقل "تأكيد كلمة المرور" عند الإضافة أو التعديل.',
        },
        {
          id: "BR-UM-03",
          description:
            'يُمنع دخول أي مستخدم إلى النظام إذا كانت حالته "غير نشط".',
        },
        {
          id: "BR-UM-04",
          description:
            "يمتلك مدير النظام (Admin) جميع الصلاحيات، بينما يقتصر دور المستخدم العادي (User) على عرض بياناته الشخصية وتغيير كلمة المرور الخاصة به فقط، ويُحظر عليه الوصول للإعدادات والتقارير.",
        },
        {
          id: "BR-UM-05",
          description: "لا يُسمح بتعديل بيانات مستخدم غير موجود بالنظام.",
        },
        {
          id: "BR-UM-06",
          description:
            "يُحظر تماماً إلغاء تنشيط أو تعطيل آخر حساب أدمين (Admin) في النظام.",
        },
        {
          id: "BR-UM-07",
          description:
            "يُمنع عرض أو إظهار كلمة المرور الخاصة بالمستخدم في كافة الواجهات لأغراض أمنية.",
        },
      ],
    },
    {
      moduleName: "وحدة إدارة الشركات (Company Management)",
      rules: [
        {
          id: "BR-CM-01",
          description:
            "اسم الشركة حقل إجباري، ولا يُسمح بتكرار اسم الشركة في النظام.",
        },
        {
          id: "BR-CM-02",
          description:
            "يُشترط تحديد سقف الحساب وحالة الشركة والخطوط التابعة لها (من - إلى) عند إنشاء الشركة.",
        },
      ],
    },
    {
      moduleName: "وحدة إدارة المسافرين (Passenger Management)",
      rules: [
        {
          id: "BR-PM-01",
          description: "الاسم الرباعي للمسافر حقل إجباري عند الإضافة.",
        },
        {
          id: "BR-PM-02",
          description: "يُشترط أن يكون رقم الجواز فريداً وغير مكرر لمسافر آخر.",
        },
        {
          id: "BR-PM-03",
          description:
            "يتم تصنيف حساب المسافر (نقدي / آجل) وتتبع الأرصدة المالية المستحقة (له / عليه).",
        },
      ],
    },
    {
      moduleName: "وحدة إدارة الوكلاء (Agent Management)",
      rules: [
        {
          id: "BR-AG-01",
          description:
            "متابعة أرصدة الوكيل (مدين / دائن) مع الالتزام بعدم تجاوز سقف الحساب المعتمد للوكيل.",
        },
      ],
    },
    {
      moduleName: "وحدة إدارة التذاكر (Ticket Management)",
      rules: [
        {
          id: "BR-TK-01",
          description:
            "يتم تحديد قيمة التذكرة تلقائياً بناءً على تعرفة الشركة والخط المعتمد في الإعدادات.",
        },
        {
          id: "BR-TK-02",
          description:
            "عند إصدار التذكرة، يتم آلياً إضافة القيمة إلى رصيد الشركة (التزام عليّ للشركة) وإضافتها لرصيد المستخدم/الوكيل (حق لي على المستخدم/الوكيل).",
        },
        {
          id: "BR-TK-03",
          description:
            "يُسمح بتسديد قيمة التذكرة فقط إذا كانت غير مرحلة، وجاهزة، وتاريخ الرحلة لم ينتهِ بعد.",
        },
        {
          id: "BR-TK-04",
          description:
            "يُحظر إجراء مرتجع للتذكرة إذا كانت مرحلة، أو انتهى تاريخ رحلتها، أو كانت التذكرة غير جاهزة.",
        },
        {
          id: "BR-TK-05",
          description:
            "يتم توليد رقم فريد لكل تذكرة صادرة وتتبع حالاتها المعتمدة (طلب، غير مسددة، مرحلة، محفوظ، ملغية).",
        },
      ],
    },
    {
      moduleName: "وحدة الإعدادات والسجلات (System Settings & Audit Log)",
      rules: [
        {
          id: "BR-ST-01",
          description:
            "يتم تسجيل وتتبع كافة حركات المستخدمين أوتوماتيكياً في سجل العمليات (Audit Log).",
        },
        {
          id: "BR-ST-02",
          description:
            "ضبط تسعيرات التذاكر والخصومات المسموحة بناءً على خط سير الرحلة والشركة الناقلة.",
        },
      ],
    },
  ],

  traceabilityMatrix: [
    {
      reqId: "FR-01",
      reqTitle: "تسجيل الدخول",
      useCaseId: "UC-01",
      priority: "عالية",
      nfrDependency: "NFR-S01",
      businessRuleRef: "—",
      acceptanceCriteria: "تسجيل دخول ناجح أو رسالة خطأ مناسبة",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-02",
      reqTitle: "إنشاء حساب مستخدم",
      useCaseId: "UC-02",
      priority: "عالية",
      nfrDependency: "NFR-S01",
      businessRuleRef: "BR-01, BR-02, BR-03",
      acceptanceCriteria: "إنشاء الحساب مع التحقق من القيود",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-05",
      reqTitle: "إدارة الشركات الناقلة",
      useCaseId: "UC-08",
      priority: "عالية",
      nfrDependency: "NFR-P01",
      businessRuleRef: "BR-10",
      acceptanceCriteria: "حفظ الشركة ومنع التكرار",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-06",
      reqTitle: "إدارة المسافرين",
      useCaseId: "UC-03",
      priority: "عالية",
      nfrDependency: "NFR-P01",
      businessRuleRef: "—",
      acceptanceCriteria: "تسجيل المسافر مع فرادية الجواز",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-07",
      reqTitle: "إدارة الوكلاء",
      useCaseId: "UC-09",
      priority: "عالية",
      nfrDependency: "NFR-P01",
      businessRuleRef: "BR-05",
      acceptanceCriteria: "تسجيل الوكيل وتتبع المديونية",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-08",
      reqTitle: "إصدار التذاكر",
      useCaseId: "UC-04",
      priority: "عالية",
      nfrDependency: "NFR-P01, NFR-S02",
      businessRuleRef: "BR-04, BR-05, BR-06",
      acceptanceCriteria: "إصدار التذكرة وتحديث الأرصدة آلياً",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-09",
      reqTitle: "التسديد والمرتجعات",
      useCaseId: "UC-05, UC-10",
      priority: "عالية",
      nfrDependency: "NFR-S02",
      businessRuleRef: "BR-07",
      acceptanceCriteria: "السداد/المرتجع مع تسوية الأرصدة",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-S01",
      reqTitle: "إعدادات الخطوط والتسعير",
      useCaseId: "UC-11",
      priority: "عالية",
      nfrDependency: "—",
      businessRuleRef: "BR-08",
      acceptanceCriteria: "حفظ الإعدادات بدون قيم سالبة",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-S02",
      reqTitle: "سجل التدقيق",
      useCaseId: "—",
      priority: "متوسطة",
      nfrDependency: "NFR-S02",
      businessRuleRef: "BR-09",
      acceptanceCriteria: "تسجيل 100% من الحركات",
      implementationStatus: "قيد الانتظار",
    },
    {
      reqId: "FR-S03",
      reqTitle: "تقارير المبيعات والأرباح",
      useCaseId: "UC-06",
      priority: "عالية",
      nfrDependency: "NFR-P01",
      businessRuleRef: "—",
      acceptanceCriteria: "عرض التقارير بدقة مع التصفية",
      implementationStatus: "قيد الانتظار",
    },
  ],
  assumptions: [
    {
      id: "ASM-01",
      description:
        "توفر اتصال شبكي ثابت بين أجهزة المستخدمين والسيرفر الرئيسي.",
      impactIfInvalid: "تعطل عمليات إصدار التذاكر وتحديث الأرصدة المالية.",
    },
    {
      id: "ASM-02",
      description: "جميع المسافرين يمتلكون أرقام جوازات سفر فريدة وصالحة.",
      impactIfInvalid: "تكرار بيانات المسافرين وعدم دقة التتبع المالي.",
    },
    {
      id: "ASM-03",
      description:
        "يتم تعريف الشركات الناقلة وخطوط السير والتسعيرات قبل بدء إصدار التذاكر.",
      impactIfInvalid: "عدم القدرة على إصدار تذاكر بسبب غياب بيانات الإعدادات.",
    },
  ],
  dependencies: [
    {
      id: "DEP-01",
      description:
        "توفر بيئة استضافة مستقرة (سيرفر) تدعم تشغيل النظام على مدار الساعة.",
      relatedModule: "جميع الوحدات",
      impactIfNotMet: "توقف النظام بالكامل عن العمل.",
    },
    {
      id: "DEP-02",
      description:
        "توفر قاعدة بيانات علائقية (SQL Server / PostgreSQL) مع دعم النسخ الاحتياطي.",
      relatedModule: "طبقة البيانات",
      impactIfNotMet: "فقدان البيانات المالية وعدم القدرة على التشغيل.",
    },
    {
      id: "DEP-03",
      description: "اعتماد سياسة أمنية واضحة لإدارة صلاحيات المستخدمين (RBAC).",
      relatedModule: "وحدة إدارة المستخدمين",
      impactIfNotMet: "ثغرات أمنية ووصول غير مصرح به للبيانات الحساسة.",
    },
  ],
  signOffs: [
    // {
    //   stakeholder: "مدير المشروع",
    //   signatureAndTitle: "أحمد السالم — Senior Project Manager",
    //   date: "",
    // },
    {
      stakeholder: "مهندس المعمارية",
      signatureAndTitle: "أسامة الفاتكي —Software Engineer",
      date: "2026/7/27",
    },
    // {
    //   stakeholder: "محلل الأعمال",
    //   signatureAndTitle: "[الاسم] — Business Analyst",
    //   date: "",
    // },
  ],
};
