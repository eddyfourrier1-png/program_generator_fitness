// Base de données des exercices avec traductions
const exercisesData = {
    pectoraux: [
        {
            key: 'bench-press',
            translations: {
                fr: 'Développé couché',
                en: 'Bench Press',
                de: 'Bankdrücken',
                es: 'Press de banca'
            },
            equipment: {
                fr: 'Barre ou haltères',
                en: 'Bar or dumbbells',
                de: 'Langhantel oder Kurzhanteln',
                es: 'Barra o mancuernas'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'push-ups',
            translations: {
                fr: 'Pompes',
                en: 'Push-ups',
                de: 'Liegestütze',
                es: 'Flexiones'
            },
            equipment: {
                fr: 'Aucun',
                en: 'None',
                de: 'Keine',
                es: 'Ninguno'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'chest-fly',
            translations: {
                fr: 'Écarté couché',
                en: 'Chest Fly',
                de: 'Butterfly',
                es: 'Apertura en banco'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'dips',
            translations: {
                fr: 'Dips',
                en: 'Dips',
                de: 'Dips',
                es: 'Fondos'
            },
            equipment: {
                fr: 'Barres parallèles',
                en: 'Parallel bars',
                de: 'Parallele Stangen',
                es: 'Barras paralelas'
            },
            difficulty: 'Avancé'
        }
    ],
    dos: [
        {
            key: 'lat-pulldown',
            translations: {
                fr: 'Tirage vertical',
                en: 'Lat Pulldown',
                de: 'Latzug',
                es: 'Jalón dorsal'
            },
            equipment: {
                fr: 'Barre',
                en: 'Bar',
                de: 'Stange',
                es: 'Barra'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'dumbbell-row',
            translations: {
                fr: 'Rowing',
                en: 'Dumbbell Row',
                de: 'Kurzhantelrudern',
                es: 'Remo con mancuerna'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'horizontal-row',
            translations: {
                fr: 'Tirage horizontal',
                en: 'Horizontal Row',
                de: 'Horizontaler Zug',
                es: 'Remo horizontal'
            },
            equipment: {
                fr: 'Machine',
                en: 'Machine',
                de: 'Maschine',
                es: 'Máquina'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'pull-ups',
            translations: {
                fr: 'Tractions',
                en: 'Pull-ups',
                de: 'Klimmzüge',
                es: 'Dominadas'
            },
            equipment: {
                fr: 'Barre fixe',
                en: 'Fixed bar',
                de: 'Feste Stange',
                es: 'Barra fija'
            },
            difficulty: 'Avancé'
        }
    ],
    jambes: [
        {
            key: 'squat',
            translations: {
                fr: 'Squat',
                en: 'Squat',
                de: 'Kniebeuge',
                es: 'Sentadilla'
            },
            equipment: {
                fr: 'Barre',
                en: 'Bar',
                de: 'Stange',
                es: 'Barra'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'lunges',
            translations: {
                fr: 'Fentes',
                en: 'Lunges',
                de: 'Ausfallschritte',
                es: 'Zancadas'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'leg-press',
            translations: {
                fr: 'Presse',
                en: 'Leg Press',
                de: 'Beinpresse',
                es: 'Prensa de piernas'
            },
            equipment: {
                fr: 'Machine',
                en: 'Machine',
                de: 'Maschine',
                es: 'Máquina'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'deadlift',
            translations: {
                fr: 'Deadlift',
                en: 'Deadlift',
                de: 'Kreuzheben',
                es: 'Peso muerto'
            },
            equipment: {
                fr: 'Barre',
                en: 'Bar',
                de: 'Stange',
                es: 'Barra'
            },
            difficulty: 'Avancé'
        }
    ],
    epaules: [
        {
            key: 'military-press',
            translations: {
                fr: 'Développé militaire',
                en: 'Military Press',
                de: 'Militärdrücken',
                es: 'Press militar'
            },
            equipment: {
                fr: 'Barre ou haltères',
                en: 'Bar or dumbbells',
                de: 'Langhantel oder Kurzhanteln',
                es: 'Barra o mancuernas'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'lateral-raise',
            translations: {
                fr: 'Élévation latérale',
                en: 'Lateral Raise',
                de: 'Seitheben',
                es: 'Elevación lateral'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'face-pull',
            translations: {
                fr: 'Face pull',
                en: 'Face Pull',
                de: 'Face Pull',
                es: 'Face pull'
            },
            equipment: {
                fr: 'Machine',
                en: 'Machine',
                de: 'Maschine',
                es: 'Máquina'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'shrug',
            translations: {
                fr: 'Shrug',
                en: 'Shrug',
                de: 'Schulterzucken',
                es: 'Encogimiento'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Débutant'
        }
    ],
    bras: [
        {
            key: 'bicep-curl',
            translations: {
                fr: 'Curl biceps',
                en: 'Bicep Curl',
                de: 'Bizeps-Curl',
                es: 'Curl de bíceps'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'tricep-extension',
            translations: {
                fr: 'Extension triceps',
                en: 'Tricep Extension',
                de: 'Trizeps-Extension',
                es: 'Extensión de tríceps'
            },
            equipment: {
                fr: 'Haltères',
                en: 'Dumbbells',
                de: 'Kurzhanteln',
                es: 'Mancuernas'
            },
            difficulty: 'Débutant'
        },
        {
            key: 'tricep-dips',
            translations: {
                fr: 'Dips triceps',
                en: 'Tricep Dips',
                de: 'Trizeps-Dips',
                es: 'Fondos de tríceps'
            },
            equipment: {
                fr: 'Barres parallèles',
                en: 'Parallel bars',
                de: 'Parallele Stangen',
                es: 'Barras paralelas'
            },
            difficulty: 'Intermédiaire'
        },
        {
            key: 'close-grip-bench-press',
            translations: {
                fr: 'Close grip bench press',
                en: 'Close Grip Bench Press',
                de: 'Enger Bankdrücken',
                es: 'Press de banca con agarre cerrado'
            },
            equipment: {
                fr: 'Barre',
                en: 'Bar',
                de: 'Stange',
                es: 'Barra'
            },
            difficulty: 'Avancé'
        }
    ]
};

// Fonction pour obtenir le nom d'un exercice dans la langue actuelle
function getExerciseName(exercise, language) {
    if (exercise.translations && exercise.translations[language]) {
        return exercise.translations[language];
    }
    // Fallback vers français si la langue n'est pas trouvée
    return exercise.translations ? exercise.translations.fr : exercise.name;
}

// Fonction pour obtenir l'équipement dans la langue actuelle
function getExerciseEquipment(exercise, language) {
    if (exercise.equipment && typeof exercise.equipment === 'object' && exercise.equipment[language]) {
        return exercise.equipment[language];
    }
    // Fallback vers français si la langue n'est pas trouvée
    return exercise.equipment ? exercise.equipment.fr : exercise.equipment;
}

// Export des données et fonctions
const ExercisesDatabase = {
    data: exercisesData,
    getExerciseName,
    getExerciseEquipment
};
